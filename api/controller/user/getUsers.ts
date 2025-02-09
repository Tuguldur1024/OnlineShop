import { Request, Response } from "express";
import UserModel from "../../model/user.model";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
