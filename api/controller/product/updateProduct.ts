import { Request, Response } from "express";
import ProductModel from "../../model/product.model";
import mongoose from "mongoose";

export const updateProducts = async (req: Request, res: Response) => {
  const {
    id,
    productName,
    categoryId,
    price,
    quantity,
    thumbnails,
    images,
    coupon,
    salePercent,
    description,
  } = req.body;
  try {
    const newId = mongoose.Types.ObjectId.createFromHexString(id);
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { _id: newId },
      {
        productName,
        categoryId,
        price,
        quantity,
        thumbnails,
        images,
        coupon,
        salePercent,
        description,
      },
      { new: true }
    );
    res.status(200).json({ message: updatedProduct });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
