import mongoose, { Schema } from "mongoose";

type Review = {
  productId: Schema.Types.ObjectId;
  stars: {
    star1: number;
    star2: number;
    star3: number;
    star4: number;
    star5: number;
  };
  comments: [Schema.Types.ObjectId];
  createdAt: Date;
  updatedAt: Date;
};

const ReviewSchema = new Schema<Review>({
  productId: { type: mongoose.Types.ObjectId, required: true, ref: "Product" },
  stars: {
    star1: { type: Number },
    star2: { type: Number },
    star3: { type: Number },
    star4: { type: Number },
    star5: { type: Number },
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ReviewModel = mongoose.model<Review>("Review", ReviewSchema);

export default ReviewModel;
