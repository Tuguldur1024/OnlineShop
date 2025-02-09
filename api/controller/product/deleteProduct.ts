import { Request, Response } from "express";
import ProductModel from "../../model/product.model";
import mongoose from "mongoose";

export const deleteProducts = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const newId = mongoose.Types.ObjectId.createFromHexString(id);
    const deletedProduct = await ProductModel.findOneAndDelete({ _id: newId });
    res.status(200).json({ deleted: { deletedProduct } });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
