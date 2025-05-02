import mongoose from "mongoose";

import { Product } from "./productModel.js";
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User reference is required"],
      index: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: [true, "Product reference is required"],
          validate: {
            validator: async function (v) {
              return await Product.exists({ _id: v });
            },
            message: "Product {VALUE} does not exist",
          },
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
        },
        price: {
          type: Number,
          required: true,
          min: [0, "Price cannot be negative"],
        },
        size: String,
        color: String,
      },
    ],
    shippingAddress: {
      street: {
        type: String,
        required: [true, "Street address is required"],
        trim: true,
      },
      postalCode: {
        type: String,
        required: [true, "Postal code is required"],
        match: [/^\d{5}$/, "Please enter a valid 5-digit German postal code"],
      },
      city: {
        type: String,
        required: [true, "City is required"],
        trim: true,
      },
      country: {
        type: String,
        required: true,
        default: "Germany",
        enum: {
          values: ["Germany", "Austria", "Switzerland"],
          message: "We currently only ship to DACH countries",
        },
      },
    },
    payment: {
      method: {
        type: String,
        required: true,
        enum: ["credit_card", "paypal", "bank_transfer"],
      },
      status: {
        type: String,
        required: true,
        enum: ["pending", "completed", "failed", "refunded"],
        default: "pending",
      },
      transactionId: {
        type: String,
        index: true,
      },
      amount: {
        type: Number,
        required: true,
        min: [0, "Payment amount cannot be negative"],
      },
    },
    shipping: {
      company: {
        type: String,
        required: true,
        enum: ["DHL", "DPD", "UPS", "Hermes"],
      },
      cost: {
        type: Number,
        required: true,
        min: [0, "Shipping cost cannot be negative"],
      },
      trackingNumber: {
        type: String,
        index: true,
      },
      estimatedDelivery: {
        type: Date,
        validate: {
          validator: function (date) {
            return date > this.createdAt;
          },
          message: "Delivery date must be after order creation",
        },
      },
    },
    subtotal: {
      type: Number,
      required: true,
      min: [0, "Subtotal cannot be negative"],
    },
    tax: {
      type: Number,
      required: true,
      min: [0, "Tax cannot be negative"],
    },
    total: {
      type: Number,
      required: true,
      min: [0, "Total cannot be negative"],
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
    optimisticConcurrency: true,
  }
);

// Virtuals
orderSchema.virtual("formattedDate").get(function () {
  return this.createdAt.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

orderSchema.virtual("formattedTotal").get(function () {
  return `€${this.total.toFixed(2)}`;
});

// Indexes
orderSchema.index({ user: 1, status: 1 });
orderSchema.index({ createdAt: -1 });

// Pre-save hooks
orderSchema.pre("save", function (next) {
  const TAX_RATE = 0.19; // 19% VAT

  // Calculate financials
  this.subtotal = this.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  this.tax = parseFloat((this.subtotal * TAX_RATE).toFixed(2));
  this.total = parseFloat(
    (this.subtotal + this.shipping.cost + this.tax).toFixed(2)
  );

  // Ensure payment amount matches total
  if (this.payment.amount !== this.total) {
    this.payment.amount = this.total;
  }

  next();
});

// Query helpers
orderSchema.query.byUser = function (userId) {
  return this.where({ user: userId });
};

export const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema);
