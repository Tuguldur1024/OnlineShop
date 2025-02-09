import CommentModel from "../../model/comment.model";
import { Request, Response } from "express";
import ReviewModel from "../../model/review.model";
import mongoose from "mongoose";

export const createComment = async (req: Request, res: Response) => {
  const { reviewId, userId, comment, star, productId } = req.body;
  const convertedId = mongoose.Types.ObjectId.createFromHexString(reviewId);
  try {
    const review = ReviewModel.findById({ _id: convertedId });
    if (!review) {
      const review = new ReviewModel({ productId }).save();
      return;
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
