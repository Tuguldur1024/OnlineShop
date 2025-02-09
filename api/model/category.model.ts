import mongoose, { Schema } from "mongoose";

type category = {
  name: String;
  createdAt: Date;
  updatedAt: Date;
};

const CategorySchema = new Schema<category>({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const CategoryModel = mongoose.model<category>("Category", CategorySchema);
export default CategoryModel;
