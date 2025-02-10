import { Request, Response } from "express";
import UserModel from "../../model/user.model";
import bcrypt from "bcrypt";

export const updatePassword = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const response = await UserModel.findOneAndUpdate(
      { email: email },
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json({ user: response });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
