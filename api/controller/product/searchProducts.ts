import { Request, Response } from "express";
import ProductModel from "../../model/product.model";

export const searchProducts = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const products = ProductModel.find({ $regex: { name: name } });
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
