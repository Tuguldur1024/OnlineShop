import ProductModel from "../../model/product.model";
import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
