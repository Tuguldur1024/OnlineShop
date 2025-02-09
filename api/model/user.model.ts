import mongoose, { Schema } from "mongoose";

type User = {
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
  savedProducts: [mongoose.Schema.Types.ObjectId];
};

const UserSchema = new Schema<User>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String },
  zipCode: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  savedProducts: [
    { type: mongoose.Schema.Types.ObjectId, default: [], ref: "Product" },
  ],
});

const UserModel = mongoose.model<User>("User", UserSchema);
export default UserModel;
