import mongoose from "mongoose";

type Otp = {
  email: string;
  otp: string;
  expiresAt: Date;
};

const OtpSchema = new mongoose.Schema<Otp>({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, required: true, timestamps: true },
});

const OtpModel = mongoose.model<Otp>("Otp", OtpSchema);
export default OtpModel;
