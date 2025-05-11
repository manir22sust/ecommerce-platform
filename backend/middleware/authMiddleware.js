/* import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (error) {
    console.error("JWT Error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};
 */
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  let token;

  try {
    // 1. Token retrieval
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    // 2. Token existence check
    if (!token) {
      return res.status(401).json({
        code: "NO_TOKEN",
        message: "Not authorized - no token provided",
      });
    }

    // 3. Token verification
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. User lookup with existence check
    const user = await User.findById(decoded.userId).select("-password"); // Changed from userId to id
    if (!user) {
      return res.status(401).json({
        code: "USER_NOT_FOUND",
        message: "The user belonging to this token no longer exists",
      });
    }

    // 5. Add fresh user data to request
    req.user = user;

    // 6. Continue processing
    next();
  } catch (error) {
    // 7. Handle specific error cases
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        code: "TOKEN_EXPIRED",
        message: "Session expired - please log in again",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        code: "INVALID_TOKEN",
        message: "Invalid authentication token",
      });
    }

    // 8. Generic error handler
    console.error("Authentication Error:", error);
    return res.status(500).json({
      code: "AUTH_ERROR",
      message: "Something went wrong with authentication",
    });
  }
};
