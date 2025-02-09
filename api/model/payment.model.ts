import mongoose, { Schema } from "mongoose";

type Payment = {
  orderId: Schema.Types.ObjectId;
  paymentStatus: "Paid" | "Not Paid";
  paymentType: "Card" | "Qpay" | "SocialPay";
  createdAt: Date;
  updatedAt: Date;
};
const PaymentSchema = new Schema<Payment>({
  orderId: { type: Schema.Types.ObjectId },
  paymentStatus: { type: String, enum: ["Paid", "Not Paid"] },
  paymentType: { type: String, enum: ["Card", "Qpay", "SocialPay"] },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const PaymentModel = mongoose.model<Payment>("Payment", PaymentSchema);

export default PaymentModel;
