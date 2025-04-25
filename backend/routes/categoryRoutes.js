import express from "express";
const router = express.Router();
import {
  getAllCategories,
  getCategoryBySlug,
} from "../controllers/categoryController.js";

router.get("/", getAllCategories);
router.get("/:slug", getCategoryBySlug);

export default router;
