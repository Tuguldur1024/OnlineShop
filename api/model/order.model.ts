import mongoose, { Schema } from "mongoose";

type Order = {
  status: string;
  userId: Schema.Types.ObjectId;
  lastName: string;
  firstName: string;
  secondPhoneNumber?: string;
  deliveredDate: Date;
  totalAmount: number;
  description: string;
  details: [OrderDetails];
  address: string;
  createdAt: Date;
  updatedAt: Date;
};
export type OrderDetails = {
  productId: string;
  quantity: Number;
  price: Number;
  images: string[];
  name: string;
};

const OrderDetailsSchema = new Schema<OrderDetails>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  images: { type: [String] },
  name: { type: String },
});

const OrderSchema = new Schema<Order>({
  status: {
    type: String,
    enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
    default: "Ordered",
  },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  secondPhoneNumber: { type: String },
  deliveredDate: { type: Date, default: Date.now() },
  totalAmount: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
  description: { type: String },
  details: { type: [OrderDetailsSchema], required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const OrderModel = mongoose.model<Order>("Order", OrderSchema);

export default OrderModel;
