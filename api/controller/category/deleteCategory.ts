import CategoryModel from "../../model/category.model";
import { Request, Response } from "express";

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete({ _id: id });
    res.send({ category: deletedCategory });
  } catch (error) {
    res.send({ message: error });
  }
};
