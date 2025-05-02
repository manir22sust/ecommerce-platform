import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

// Add to top of file
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
// Validation rules for registration
export const validateRegistration = [
  check("firstName").notEmpty().withMessage("First name is required"),
  check("lastName").notEmpty().withMessage("Last name is required"),
  check("email").isEmail().withMessage("Valid email required").normalizeEmail(),
  check("password").isLength({ min: 8 }).withMessage("Minimum 8 characters"),
  check("gender")
    .isIn(["Frau", "Herr", "Keine Angabe"])
    .withMessage("Invalid gender"),
];
// Validation rules for login
export const validateLogin = [
  check("email")
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

const sanitizeUser = (user) => ({
  _id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  gender: user.gender,
  newsletter: user.newsletter,
  address: user.address,
  createdAt: user.createdAt,
});
export const getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const users = await User.find()
      .select("-password") // Exclude passwords
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    res.json(users.map(sanitizeUser));
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(sanitizeUser(user));
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, email, password, gender, newsletter } =
      req.body;

    // Check for existing user
    const existingUser = await User.findOne({
      email: email.toLowerCase().trim(),
    });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      gender,
      newsletter: newsletter || false,
      address: {},
    });

    const savedUser = await newUser.save();

    const token = generateToken(savedUser._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      ...sanitizeUser(savedUser),
      token,
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Server error during registration",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, address } = req.body;
    const updateFields = {};

    if (firstName) updateFields.firstName = firstName.trim();
    if (lastName) updateFields.lastName = lastName.trim();

    if (email) {
      const normalizedEmail = email.toLowerCase().trim();
      const existingUser = await User.findOne({ email: normalizedEmail });
      if (existingUser && existingUser._id.toString() !== id) {
        return res.status(409).json({ error: "E-Mail bereits registriert" });
      }
      updateFields.email = normalizedEmail;
    }

    if (address) updateFields.address = address;

    const updatedUser = await User.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedUser)
      return res.status(404).json({ error: "Benutzer nicht gefunden" });
    res.json(sanitizeUser(updatedUser));
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "E-Mail bereits registriert" });
    }
    res.status(500).json({ error: "Serverfehler" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update loginUser function
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
      ...sanitizeUser(user),
      token, // Optional: if you want to use header-based auth
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

/* 
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json(sanitizeUser(user));
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
 */
