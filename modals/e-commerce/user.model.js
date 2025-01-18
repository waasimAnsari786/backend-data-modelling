import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      min: [8, "Password must be at least 8 characters"],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
