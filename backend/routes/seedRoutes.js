import express from "express";
import { seedCategories } from "../controllers/seedController.js";
const router = express.Router();

router.post("/seed", seedCategories);

export default router;
