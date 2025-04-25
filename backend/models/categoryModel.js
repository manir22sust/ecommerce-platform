import mongoose from "mongoose";
import { productSchema } from "./productModel.js";

const categorySchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  products: [productSchema],
});
// Check if model already exists before creating it
const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
