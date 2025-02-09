import { Request, Response } from "express";
import UserModel from "../../model/user.model";
import bcrypt from "bcrypt";

export const signUp = async (req: Request, res: Response) => {
  const { userName, email, phoneNumber, password } = req.body;
  const saltRounds = 10;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await UserModel.create({
      userName,
      phoneNumber,
      password: hashedPassword,
      email,
    });

    res.json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
