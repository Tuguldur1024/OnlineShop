import { Request, Response } from "express";
import OrderModel from "../../model/order.model";

export const getOrdersByUserId = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const orders = await OrderModel.find({ userId: userId });
    res.status(200).json({ data: orders });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
