import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  qty: { type: Number, required: true, default: 1 },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: { type: Number, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderItems: [orderItemSchema],
    address: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },

  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
