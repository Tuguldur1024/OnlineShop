import mongoose, { Schema } from "mongoose";

type comment = {
  userId: Schema.Types.ObjectId;
  comment: String;
  createdAt: Date;
  updatedAt: Date;
  productId : Schema.Types.ObjectId;
  star : Number;
};

const CommentSchema = new Schema<comment>({
  userId: { type: Schema.Types.ObjectId , ref : "User" },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  productId : {type : Schema.Types.ObjectId , ref : "Product"},
  star : {type : Number}
});

const CommentModel = mongoose.model<comment>("Comment", CommentSchema);
export default CommentModel;
