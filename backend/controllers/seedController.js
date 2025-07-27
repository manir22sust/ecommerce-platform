import mongoose from "mongoose";
import { Category } from "../models/categoryModel.js";
import { Product } from "../models/productModel.js";
import categoriesData from "../data/Categories.js";

export const seedDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();

    // Create categories with images
    const createdCategories = await Category.insertMany(
      categoriesData.map((category) => ({
        name: category.name,
        slug: category.slug,
        image: category.image || "default-image.jpg", // Add image field
      }))
    );

    // Create products with category references
    const products = [];
    for (const categoryData of categoriesData) {
      const category = createdCategories.find(
        (c) => c.slug === categoryData.slug
      );

      for (const productData of categoryData.products) {
        const { id, ...productWithoutId } = productData; // Remove manual ID
        products.push({
          ...productWithoutId,
          category: category._id,
          _id: new mongoose.Types.ObjectId(), // Generate new ObjectId
          image: productData.image, // Include image
          images: productData.images, // Include images array
        });
      }
    }

    await Product.insertMany(products);

    // Update categories with product references
    for (const category of createdCategories) {
      const categoryProducts = products
        .filter((p) => p.category.equals(category._id))
        .map((p) => p._id);

      await Category.findByIdAndUpdate(category._id, {
        $set: { products: categoryProducts },
      });
    }

    console.log(`Database seeded with:
      - ${createdCategories.length} categories
      - ${products.length} products`);

    return { categories: createdCategories, products };
  } catch (error) {
    console.error("Seeding failed:", error);
    throw error;
  }
};
