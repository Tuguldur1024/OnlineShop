import ProductModel from "../../model/product.model";
import { Request, Response } from "express";

export const getLikedProducts = async (req: Request, res: Response) => {
  const { likedProducts } = req.body;
  const productIds = Object.values(likedProducts);
  try {
    const myProducts = await ProductModel.find({ _id: { $in: productIds } });
    res.status(200).json({ products: myProducts });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
