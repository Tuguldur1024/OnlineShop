import { useEffect, useState } from "react";
import axios from "axios";

type IdQuantity = {
  productId: string;
  quantity: number;
};

type Product = {
  productName: string;
  categoryId: string;
  price: number;
  quantity: number;
  thumbnails: string;
  images: string[];
  coupon: string;
  salePercent: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export const SecondStepProduct = (props: IdQuantity) => {
  const { productId, quantity } = props;

  const [myProduct, setMyProduct] = useState<Product>();
  useEffect(() => {
    try {
      axios
        .post("http://localhost:8001/product/getProductById", { id: productId })
        .then(function (response) {
          setMyProduct(response.data.product);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [productId]);
  const value = myProduct?.price * quantity;
  return (
    <div className="w-[285px] flex gap-6">
      <div
        style={{
          backgroundImage: `url('${myProduct?.images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-20 h-20 rounded-2xl "
      ></div>
      <div className="flex flex-col gap-1">
        <p> {myProduct?.productName} </p>
        <p className="text-xs">
          {quantity}*{myProduct?.price}
        </p>
        <p className="font-bold text-black">{value}₮</p>
      </div>
    </div>
  );
};
