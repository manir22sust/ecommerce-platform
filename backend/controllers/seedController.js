import Category from "../models/CategoryModel.js";
import categoriesData from "../data/categories.js";

export const seedDatabase = async () => {
  try {
    // Clear existing data
    await Category.deleteMany();

    // Insert new data
    const createdCategories = await Category.insertMany(categoriesData);

    console.log("Database seeded successfully");
    return createdCategories;
  } catch (error) {
    console.error("Seeding error:", error);
    throw error;
  }
};
export const seedCategories = async (req, res) => {
  try {
    await Category.deleteMany();
    const categories = await Category.insertMany(categoriesData);
    res.status(201).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
