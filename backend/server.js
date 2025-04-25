import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import seedRoutes from "./routes/seedRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
// user routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// product routes
app.use("/api/products", productRoutes);

// category routes
app.use("/api/categories", categoryRoutes);
app.use("/api", seedRoutes);

// Connect to MongoDB
connectDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(
    `Server running on http://${process.env.HOST}:${process.env.PORT}`
  );
});
