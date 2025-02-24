import CommentModel from "../../model/comment.model";
import { Request, Response } from "express";

export const getCommentsByProductId = async (req: Request, res: Response) => {
    const { productId } = req.body;
    try {
        const comments = await CommentModel.find({ productId }).populate("userId", "userName")
        res.status(200).json({ comments });
    } catch (error) {
        res.status(400).json({ message: error });
    }
};
