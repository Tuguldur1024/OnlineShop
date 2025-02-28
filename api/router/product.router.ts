import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProducts,
  updateProducts,
  getProductsByCategory,
  getLikedProducts,
  getCardValue,
  searchProducts,
} from "../controller/product";

const productRouter = express.Router();

productRouter.get("/getProducts", getProducts);
productRouter.post("/createProduct", createProduct);
productRouter.post("/getProductById", getProductById);
productRouter.delete("/deleteProduct", deleteProducts);
productRouter.put("/updateProduct", updateProducts);
productRouter.post("/getProductsByCategory", getProductsByCategory);
productRouter.post("/getLikedProducts", getLikedProducts);
productRouter.post("/getCardValue", getCardValue);
productRouter.post("/searchProducts", searchProducts);

export default productRouter;
