import { Request, Response } from "express";
import ProductModel from "../../model/product.model";

export const createProduct = async (req: Request, res: Response) => {
  const {
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
    const newProduct = await new ProductModel({
      productName,
      categoryId,
      price,
      quantity,
      thumbnails,
      images,
      coupon,
      salePercent,
      description,
    }).save();
    res.status(200).send({ product: newProduct });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
