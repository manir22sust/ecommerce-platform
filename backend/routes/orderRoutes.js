import express from "express";
import {
  createOrder,
  getMyOrders,
  /*getOrderById,
  updateOrderToPaid,
  updateOrderStatus,
  getAllOrders,
  cancelOrder, */
} from "../controllers/orderController.js";
/* import { protect, admin } from "../middleware/authMiddleware.js"; */

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* router.route("/").post(createOrder).get(getAllOrders); */
router.post("/", protect, createOrder);

router.route("/myorders").get(protect, getMyOrders);
/* 
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/status").put(protect, admin, updateOrderStatus);
router.route("/:id/cancel").put(protect, cancelOrder); */

export default router;
