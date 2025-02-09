import { useEffect, useState } from "react";
import axios from "axios";
import Trash from "../../public/icons/trash";

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

const CartProduct = (props: IdQuantity) => {
  const { productId, quantity } = props;

  const [myProduct, setMyProduct] = useState<Product>();
  useEffect(() => {
    try {
      axios
        .post("http://localhost:8000/product/getProductById", { id: productId })
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
  return (
    <div className="w-[574px] flex justify-between items-center border border-[#ECEDF0] p-4 gap-6">
      <div
        style={{
          backgroundImage: `url('${myProduct?.images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-24 h-24 rounded-2xl "
      ></div>
      <div className="flex flex-col gap-1">
        <p>{myProduct?.productName}</p>
        <div className="flex w-[354px] mb-1">
          <button className="w-8 h-8 flex items-center rounded-full justify-center border border-[#18181B] bg-[#FFFFFF]">
            -
          </button>
          <div className="w-8 h-8 flex items-center justify-center">
            {quantity}
          </div>
          <button className="w-8 h-8 flex items-center rounded-full justify-center border border-[#18181B] bg-[#FFFFFF]">
            +
          </button>
        </div>
        <p className="text-base font-bold"> {myProduct?.price}₮ </p>
      </div>
      <div>
        <Trash />
      </div>
    </div>
  );
};
export default CartProduct;
