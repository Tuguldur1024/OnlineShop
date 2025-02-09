import { Request, Response } from "express";
import ProductModel from "../../model/product.model";

export const getProductsByCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.body;
  try {
    const products = await ProductModel.find({ categoryId: categoryId });
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
