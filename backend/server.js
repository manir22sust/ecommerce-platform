import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import seedRoutes from "./routes/seedRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://unsplash.com",
      "https://images.unsplash.com",
      "https://ecommerce-platform-rjsb.onrender.com",
      "https://shop.maniruddin.com",
    ],
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(cookieParser());
// routes
// user routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// product routes
app.use("/api/products", productRoutes);

// category routes
app.use("/api/categories", categoryRoutes);
app.use("/api/seed", seedRoutes);
// order routes
app.use("/api/orders", orderRoutes);

// Connect to MongoDB
connectDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(
    `Server running on http://${process.env.HOST}:${process.env.PORT}`
  );
});
