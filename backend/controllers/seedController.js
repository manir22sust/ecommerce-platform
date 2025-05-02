// controllers/seedController.js
import mongoose from "mongoose";
import { Category } from "../models/CategoryModel.js";
import { Product } from "../models/ProductModel.js";
import categoriesData from "../data/categories.js";

export const seedDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();

    // Create categories first
    const createdCategories = await Category.insertMany(
      categoriesData.map((category) => ({
        name: category.name,
        slug: category.slug,
      }))
    );

    // Create products with category references
    const products = [];
    for (const categoryData of categoriesData) {
      const category = createdCategories.find(
        (c) => c.slug === categoryData.slug
      );

      for (const productData of categoryData.products) {
        products.push({
          ...productData,
          category: category._id,
          _id: new mongoose.Types.ObjectId(),
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
