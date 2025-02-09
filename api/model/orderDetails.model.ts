import mongoose, { Schema } from "mongoose";

export type OrderDetails = {
  productId: Schema.Types.ObjectId;
  productQuantity: Number;
  amount: Number;
  orderId: Schema.Types.ObjectId;
  createdAt: Date;
  updateAt: Date;
};

const OrderDetailsSchema = new Schema<OrderDetails>({
  productId: { type: mongoose.Types.ObjectId, required: true },
  productQuantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  orderId: { type: mongoose.Types.ObjectId },
  createdAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
});

const OrderDetailsModel = mongoose.model("Detail", OrderDetailsSchema);

export default OrderDetailsModel;
