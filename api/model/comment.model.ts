import mongoose, { Schema } from "mongoose";

type comment = {
  reviewId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  comment: String;
  createdAt: Date;
  updatedAt: Date;
};

const CommentSchema = new Schema<comment>({
  reviewId: { type: Schema.Types.ObjectId },
  userId: { type: Schema.Types.ObjectId },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const CommentModel = mongoose.model<comment>("Comment", CommentSchema);
export default CommentModel;
