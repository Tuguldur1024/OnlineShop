import express from "express";
import {
  signIn,
  signUp,
  saveProducts,
  getUsers,
  getUserById,
} from "../controller/user";

const userRouter = express.Router();

userRouter.post("/SaveProducts", saveProducts);
userRouter.post("/Signin", signIn);
userRouter.post("/SignUp", signUp);
userRouter.get("/getUsers", getUsers);
userRouter.post("/getUserById", getUserById);

export default userRouter;
