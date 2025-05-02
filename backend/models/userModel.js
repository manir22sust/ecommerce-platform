import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: {
      type: String,
      required: true,
      enum: ["Frau", "Herr", "Keine Angabe"],
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
    address: {
      street: String,
      postalCode: String,
      city: String,
      country: String,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
