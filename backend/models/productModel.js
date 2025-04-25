import mongoose from "mongoose";

 const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  slug: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  originalPrice: Number,
  image: String,
  images: [String],
  sizes: [String],
  colors: [String],
});
// Check if model already exists before creating it
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
export { productSchema }; 
