import express from "express";

import { createOrder } from "../controller/order";

const orderRouter = express.Router();

orderRouter.post("/createOrder", createOrder);

export default orderRouter;
