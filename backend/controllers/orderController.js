import { Order } from "../models/orderModel.js";
import User from "../models/userModel.js";
import { Product } from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import { calculateTax } from "../utils/taxCalculator.js";
import { getShippingCost } from "../utils/shippingService.js";

import mongoose from "mongoose";

// CREATE ORDER CONTROLLER
const createOrder = async (req, res) => {
  try {
    const {
      user,
      items,
      shippingAddress,
      payment,
      shippingOption,
      specialInstructions,
    } = req.body;

    console.log("Create order request:", JSON.stringify(req.body, null, 2));

    const populatedItems = [];

    for (const item of items) {
      const productData = await Product.findById(item.product);

      if (!productData) {
        return res
          .status(400)
          .json({ error: `Product ${item.product} does not exist` });
      }

      populatedItems.push({
        product: item.product,
        quantity: item.quantity,
        price: productData.price, // Auto-fill price from DB
      });
    }

    const newOrder = new Order({
      user,
      items: populatedItems,
      shippingAddress,
      payment: { method: payment }, // Ensure schema uses `payment.method`
      shipping: { option: shippingOption }, // Ensure schema uses `shipping.option`
      specialInstructions,
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (err) {
    console.error("Create order error:", err);
    res
      .status(500)
      .json({ error: "Failed to create order", details: err.message });
  }
};

/* 
const createOrder = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Authentication required",
      code: "UNAUTHORIZED",
    });
  }
  const {
    items,
    paymentMethod,
    shippingAddress,
    shippingOption,
    specialInstructions,
  } = req.body;
  const userId = req.user._id;
  try {
    // 1. Authentication check
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required",
        code: "UNAUTHORIZED",
      });
    }

    // 2. Validate request body
    if (!items?.length || !Array.isArray(items)) {
      return res.status(400).json({
        message: "Invalid order items",
        code: "INVALID_ITEMS",
      });
    }

    // 3. Validate product IDs
    const invalidProducts = items.filter(
      (item) => !mongoose.Types.ObjectId.isValid(item.product)
    );

    if (invalidProducts.length > 0) {
      return res.status(400).json({
        message: "Invalid product ID format",
        invalidIds: invalidProducts.map((i) => i.product),
        code: "INVALID_PRODUCT_ID",
      });
    }

    // 4. Get products with inventory check
    const productIds = items.map((i) => new mongoose.Types.ObjectId(i.product));
    const products = await Product.find({ _id: { $in: productIds } });

    // Create map for faster lookup
    const productMap = new Map(products.map((p) => [p._id.toString(), p]));

    // Verify all products exist and have stock
    const stockErrors = [];
    const verifiedItems = items.map((item) => {
      const product = productMap.get(item.product.toString());
      if (!product) {
        stockErrors.push(`Product not found: ${item.product}`);
        return null;
      }
      if (product.stock < item.quantity) {
        stockErrors.push(`Insufficient stock for ${product.name}`);
        return null;
      }
      return { ...item, product };
    });

    if (stockErrors.length > 0) {
      return res.status(409).json({
        message: "Inventory check failed",
        errors: stockErrors,
        code: "INVENTORY_ERROR",
      });
    }

    // 5. Validate shipping address
    const validAddress = shippingAddress || req.user.address;
    const addressErrors = [];
    if (!validAddress?.street?.trim()) addressErrors.push("Street required");
    if (!validAddress?.postalCode?.trim())
      addressErrors.push("Postal code required");
    if (!validAddress?.city?.trim()) addressErrors.push("City required");

    if (addressErrors.length > 0) {
      return res.status(400).json({
        message: "Invalid shipping address",
        errors: addressErrors,
        code: "INVALID_ADDRESS",
      });
    }

    // 6. Process payment method
    const validPayments = ["invoice", "credit", "paypal"];
    if (!validPayments.includes(paymentMethod)) {
      return res.status(400).json({
        message: "Invalid payment method",
        validMethods: validPayments,
        code: "INVALID_PAYMENT",
      });
    }

    // 7. Calculate costs in transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // 8. Update inventory
      const bulkOps = verifiedItems.map((item) => ({
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { stock: -item.quantity } },
        },
      }));

      await Product.bulkWrite(bulkOps, { session });

      // 9. Create order
      const order = new Order({
        user: userId,
        items: verifiedItems.map((item) => ({
          product: item.product._id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          ...(item.size && { size: item.size }),
          ...(item.color && { color: item.color }),
        })),
        shipping: {
          address: {
            street: validAddress.street.trim(),
            postalCode: validAddress.postalCode.trim(),
            city: validAddress.city.trim(),
            ...(validAddress.phone && { phone: validAddress.phone.trim() }),
          },
          cost: await calculateShipping(verifiedItems, shippingOption),
          option: shippingOption,
        },
        payment: {
          method: paymentMethod,
          status: "pending",
        },
        total: verifiedItems.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        ),
        specialInstructions: specialInstructions?.trim() || "",
      });

      // 10. Save and commit
      const savedOrder = await order.save({ session });
      await session.commitTransaction();

      // 11. Format response
      res.status(201).json({
        id: savedOrder._id,
        status: savedOrder.status,
        total: savedOrder.total,
        estimatedDelivery: savedOrder.shipping.estimatedDelivery,
      });
    } catch (transactionError) {
      await session.abortTransaction();
      throw transactionError;
    } finally {
      session.endSession();
    }
  } catch (error) {
    console.error(`Order Error [${req.user?._id}]:`, error);

    const statusCode = error.statusCode || 500;
    const response = {
      message: "Order processing failed",
      code: "ORDER_FAILED",
    };

    if (process.env.NODE_ENV === "development") {
      response.error = error.message;
      response.stack = error.stack;
    }

    res.status(statusCode).json(response);
  }
}); */
// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .sort("-createdAt")
    .select("_id createdAt total status payment.status");

  res.json(orders);
});

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "firstName lastName email")
    .lean();

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  // Verify order ownership or admin
  if (
    order.user._id.toString() !== req.user._id.toString() &&
    !req.user.isAdmin
  ) {
    res.status(401);
    throw new Error("Not authorized");
  }

  // Format order data
  const formattedOrder = {
    ...order,
    formattedDate: new Date(order.createdAt).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  res.json(formattedOrder);
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  // Verify payment and update order
  order.payment.status = "completed";
  order.payment.transactionId = req.body.transactionId;
  order.payment.paidAt = Date.now();

  // Only update status if payment is required before processing
  if (order.status === "pending") {
    order.status = "processing";
  }

  const updatedOrder = await order.save();
  res.json(updatedOrder);
});

// @desc    Update order status
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  // Validate status transition
  const validTransitions = {
    pending: ["processing", "cancelled"],
    processing: ["shipped", "cancelled"],
    shipped: ["delivered"],
    delivered: [],
    cancelled: [],
  };

  if (!validTransitions[order.status].includes(status)) {
    res.status(400);
    throw new Error(
      `Invalid status transition from ${order.status} to ${status}`
    );
  }

  order.status = status;

  // Add status history
  order.statusHistory.push({
    status,
    changedAt: Date.now(),
    changedBy: req.user._id,
  });

  const updatedOrder = await order.save();
  res.json(updatedOrder);
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getAllOrders = asyncHandler(async (req, res) => {
  const { page = 1, limit = 20, status } = req.query;
  const filter = status ? { status } : {};

  const orders = await Order.find(filter)
    .sort("-createdAt")
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .populate("user", "firstName lastName");

  const count = await Order.countDocuments(filter);

  res.json({
    orders,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
});

// @desc    Cancel order
// @route   PUT /api/orders/:id/cancel
// @access  Private
const cancelOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  if (order.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized");
  }

  if (!["pending", "processing"].includes(order.status)) {
    res.status(400);
    throw new Error("Order cannot be cancelled at this stage");
  }

  order.status = "cancelled";
  order.statusHistory.push({
    status: "cancelled",
    changedAt: Date.now(),
    changedBy: req.user._id,
    note: "Cancelled by customer",
  });

  const updatedOrder = await order.save();
  res.json(updatedOrder);
});

export {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderStatus,
  getAllOrders,
  cancelOrder,
};
