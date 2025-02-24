import express from "express";
import {
  createComment, getCommentsByProductId
} from "../controller/comment";

const commentRouter = express.Router();

commentRouter.post("/createComment", createComment);
commentRouter.post("/getCommentsByProductId", getCommentsByProductId);


export default commentRouter;
