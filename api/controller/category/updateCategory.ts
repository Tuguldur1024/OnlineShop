import { Request, Response } from "express";
import CategoryModel from "../../model/category.model";

export const updateCategory = async (req: Request, res: Response) => {
  const { id, name } = req.body;
  try {
    const newCategory = await CategoryModel.findOneAndUpdate(
      { _id: id },
      { name: name },
      { new: true }
    );
    res.status(200).json({ category: newCategory });
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
