import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    pName: { type: String, required: true },
    description: { type: String, required: true },
    pImg: { type: String, required: true },
    pStock: { type: Number, required: true, default: 0 },
    pPrice: { type: Number, required: true, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },

  { timestamps: true }
);
export const Product = mongoose.model("Product", productSchema);
