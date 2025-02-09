import { Request, Response } from "express";
import ProductModel from "../../model/product.model";

type CartItem = {
  productId: string;
  quantity: number;
};

export const getCardValue = async (req: Request, res: Response) => {
  const { currentCart } = req.body;

  try {
    const productIds = currentCart.map((item: CartItem) => item.productId);

    const products = await ProductModel.find({ _id: { $in: productIds } });

    const productPriceMap: { [key: string]: number } = {};
    products.forEach((product) => {
      productPriceMap[product._id.toString()] = product.price;
    });

    let totalValue = 0;

    for (const item of currentCart) {
      const { productId, quantity } = item;

      const price = productPriceMap[productId] || 0;

      totalValue += price * quantity;
    }

    res.json({ totalValue });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
};
