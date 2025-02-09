import { Request, Response } from "express";
import ProductModel from "../../model/product.model";
import mongoose from "mongoose";

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.body;
  console.log(id);
  try {
    const convertedId = mongoose.Types.ObjectId.createFromHexString(id);
    const product = await ProductModel.findById({ _id: convertedId });
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
