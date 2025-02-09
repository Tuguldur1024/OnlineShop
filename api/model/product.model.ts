import mongoose, { Schema } from "mongoose";

type Product = {
  productName: string;
  categoryId: Schema.Types.ObjectId;
  price: number;
  quantity: number;
  thumbnails: string;
  images: string[];
  coupon: string;
  salePercent: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
const ProductSchema = new Schema<Product>({
  productName: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  thumbnails: { type: String },
  images: { type: [] },
  coupon: { type: String },
  salePercent: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const ProductModel = mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;
