import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controller/category";

const categoryRouter = express.Router();

categoryRouter.post("/CreateCategory", createCategory);
categoryRouter.delete("/DeleteCategory", deleteCategory);
categoryRouter.get("/GetCategories", getCategories);
categoryRouter.put("/UpdateCategory", updateCategory);

export default categoryRouter;
