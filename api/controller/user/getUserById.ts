import { Request, Response } from "express";
import UserModel from "../../model/user.model";

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user = await UserModel.findById(id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
