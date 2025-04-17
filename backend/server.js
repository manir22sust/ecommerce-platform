import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import connectDB from "./config/db.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Connect to MongoDB
connectDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(
    `Server running on http://${process.env.HOST}:${process.env.PORT}`
  );
});
