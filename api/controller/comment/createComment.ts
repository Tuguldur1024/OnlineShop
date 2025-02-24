import CommentModel from "../../model/comment.model";
import { Request, Response } from "express";

export const createComment = async (req: Request, res: Response) => {
  const { userId, comment, star, productId } = req.body;
  try {
    const response =await CommentModel.create({userId , comment , star , productId});
    const populatedComment = await CommentModel.findById(response._id); 
    res.status(200).json({newComment : populatedComment});
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
