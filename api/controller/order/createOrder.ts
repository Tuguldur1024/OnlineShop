import { Request, Response } from "express";
import OrderModel from "../../model/order.model";

export const createOrder = async (req: Request, res: Response) => {
  const {
    userId,
    firstName,
    lastName,
    secondPhoneNumber,
    address,
    details,
    totalAmount,
  } = req.body;
  try {
    const newOrder = await OrderModel.create({
      userId,
      secondPhoneNumber,
      firstName,
      lastName,
      address,
      details,
      totalAmount,
    });
    res.status(200).json({ message: newOrder });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
