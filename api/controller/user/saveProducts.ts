import mongoose from "mongoose";
import { Request, Response } from "express";
import UserModel from "../../model/user.model";

export const saveProducts = async (req: Request, res: Response) => {
  const { id, productId } = req.body;

  try {
    const convertedId = new mongoose.Types.ObjectId(id);
    const convertedProductId = new mongoose.Types.ObjectId(productId);

    const castedId = convertedId as unknown as mongoose.Schema.Types.ObjectId;
    const castedProductId =
      convertedProductId as unknown as mongoose.Schema.Types.ObjectId;

    const user = await UserModel.findById(castedId);

    if (!user) {
      res.status(404).send({ message: "User not found" });
    }

    if (user?.savedProducts.includes(castedProductId)) {
      const updatedUser = await UserModel.findByIdAndUpdate(
        castedId,
        { $pull: { saveProducts: castedProductId } },
        { new: true }
      ).populate({ path: "savedProducts" });
      res.status(200).send({ message: updatedUser });
    } else {
      const updatedUser = await UserModel.findByIdAndUpdate(
        castedId,
        { $addToSet: { savedProducts: castedProductId } },
        { new: true }
      ).populate({ path: "savedProducts" });
      console.log(updatedUser);
      res.status(200).send({ message: updatedUser });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
};
