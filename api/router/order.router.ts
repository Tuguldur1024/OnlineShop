import express from "express";

import { createOrder, getOrdersByUserId } from "../controller/order";

const orderRouter = express.Router();

orderRouter
  .post("/createOrder", createOrder)
  .post("/getOrdersByUserId", getOrdersByUserId);

export default orderRouter;
