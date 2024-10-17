import mongoose from "mongoose";

export const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    short_des: { type: String },
    price: { type: Number },
    discount: { type: Number },
    image: { type: String },
    stock: { type: String },
    star: { type: String },
    remark: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export const productModel = mongoose.model("products", DataSchema);
