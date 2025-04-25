import "dotenv/config";
import { seedDatabase } from "../controllers/seedController.js";
import connectDB from "../config/db.js";

const seed = async () => {
  try {
    await connectDB();
    await seedDatabase();
    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seed();
