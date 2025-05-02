// routes/seedRoutes.js
import { seedDatabase } from "../controllers/seedController.js";
import express from "express";

const router = express.Router();

router.post("/", seedDatabase);

export default router;
