import cors from "cors";
import express from "express";
import connection from "./connection";
import categoryRouter from "./router/category.router";
import productRouter from "./router/product.router";
import userRouter from "./router/user.router";

const app = express();

app.use(express.json());
app.use(cors());

const port = 8000;

app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

connection();

app.listen(port, () => {
  console.log(`server is running at a http://localhost:${port}`);
});
