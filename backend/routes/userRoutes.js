import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  updateUser,
  validateRegistration,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);
router.post("/login", loginUser);
router.post("/", validateRegistration, createUser);
export default router;
