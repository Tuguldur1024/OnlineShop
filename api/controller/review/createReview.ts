import ReviewModel from "../../model/review.model";
import { Request, Response } from "express";
import { Schema } from "mongoose";

type comment = {
  reviewId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export const createReview = async (req: Request, res: Response) => {
  const { reviewId, userId } = req.body;
  try {
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
