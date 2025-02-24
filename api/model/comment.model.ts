import mongoose, { Schema } from "mongoose";

type comment = {
  userId: Schema.Types.ObjectId;
  comment: String;
  createdAt: Date;
  updatedAt: Date;
  star : Number;
  productId : Schema.Types.ObjectId; 
};

const CommentSchema = new Schema<comment>({
  star : {type : Number , default : 0},
  userId: { type: Schema.Types.ObjectId , ref : "User"},
  comment: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  productId : {type : Schema.Types.ObjectId , ref : "Product"}
});

const CommentModel = mongoose.model<comment>("Comment", CommentSchema);
export default CommentModel;
