import mongoose, { Schema } from "mongoose";

type Order = {
  status: string;
  userId: Schema.Types.ObjectId;
  secondPhoneNumber?: string;
  deliveredDate: Date;
  totalAmount: number;
  coupon?: string;
  description: string;
  details: [Schema.Types.ObjectId];
  createdAt: Date;
  updatedAt: Date;
};

const OrderSchema = new Schema<Order>({
  status: {
    type: String,
    enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  secondPhoneNumber: { type: String },
  deliveredDate: { type: Date, default: Date.now() },
  totalAmount: { type: Number },
  coupon: { type: String },
  description: { type: String },
  details: { type: [mongoose.Types.ObjectId] },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const OrderModel = mongoose.model<Order>("Order", OrderSchema);

export default OrderModel;
