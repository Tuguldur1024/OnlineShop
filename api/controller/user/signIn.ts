import { Request, Response } from "express";
import UserModel from "../../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv";

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.json({ message: "user not found" });
      return;
    }
    const isMatchedPassword = await bcrypt.compare(password, user.password);

    if (!isMatchedPassword) {
      res.json({ message: "invalid credentials" });
      return;
    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      "secret",
      { expiresIn: "10h" }
    );

    res.json({
      user: {
        id: user._id,
        email: user.email,
        firstName: user.userName,
      },
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
