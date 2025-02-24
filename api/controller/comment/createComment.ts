import CommentModel from "../../model/comment.model";
import { Request, Response } from "express";


export const createComment = async (req: Request, res: Response) => {
  const {  userId, comment, star, productId } = req.body;
  console.log(star);
  try {
    const newcomment = CommentModel.create({userId , comment, star , productId});
    res.status(200).json({new : newcomment});
  }
  catch (error) {
    res.status(400).json({ message: error });
  }
};
