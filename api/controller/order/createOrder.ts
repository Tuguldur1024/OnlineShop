import { Request, Response } from "express";
import OrderModel from "../../model/order.model";
import OrderDetailsModel from "../../model/orderDetails.model";
import { OrderDetails } from "../../model/orderDetails.model";

export const createOrder = async (req: Request, res: Response) => {
  const { userId, OrderDetails } = req.body;
  try {
    const orderItems = await OrderDetailsModel.insertMany<OrderDetails>(
      OrderDetails
    );
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
