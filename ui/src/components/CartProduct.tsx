import { useEffect, useState } from "react";
import axios from "axios";
import Trash from "../../public/icons/trash";
import { cartType } from "@/lib/types";

type IdQuantity = {
  productId: string;
  quantity: number;
  price: number;
  images: string[];
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

type CartProductProps = IdQuantity & {
  trashClear: boolean;
  setTrashClear: React.Dispatch<React.SetStateAction<boolean>>;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

const CartProduct = ({ productId, quantity, price, images, trashClear, setTrashClear }: CartProductProps) => {
  const [quant, setQuant] = useState<number>(quantity);
  const [myProduct, setMyProduct] = useState<Product>();

  useEffect(() => {
    try {
      axios
        .post(`${API_URL}/product/getProductById`, { id: productId })
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

  const updateCart = (newQuantity: number) => {
    try {
      const currentCart: cartType[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = currentCart.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error updating the cart:", error);
    }
  };

  const plus = () => {
    const newQuantity = quant + 1;
    setQuant(newQuantity);
    updateCart(newQuantity);
  };

  const minus = () => {
    if (quant > 1) {
      const newQuantity = quant - 1;
      setQuant(newQuantity);
      updateCart(newQuantity);
    }
  };

  const trash = () => {
    try {
      const currentCart: cartType[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = currentCart.filter((item) => item.productId !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setTrashClear(!trashClear); 
      console.log(`Product with ID: ${productId} removed from cart.`);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  return (
    <div className="w-[574px] flex justify-between items-center border border-[#ECEDF0] p-4 gap-6">
      <div
        style={{
          backgroundImage: `url('${myProduct?.images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-24 h-24 rounded-2xl"
      ></div>
      <div className="flex flex-col gap-1">
        <p>{myProduct?.productName}</p>
        <div className="flex w-[354px] mb-1">
          <button onClick={minus} className="w-8 h-8 flex items-center rounded-full justify-center border border-[#18181B] bg-[#FFFFFF]">
            -
          </button>
          <div className="w-8 h-8 flex items-center justify-center">{quant}</div>
          <button onClick={plus} className="w-8 h-8 flex items-center rounded-full justify-center border border-[#18181B] bg-[#FFFFFF]">
            +
          </button>
        </div>
        <p className="text-base font-bold">{myProduct?.price}₮</p>
      </div>
      <button onClick={trash}>
        <Trash />
      </button>
    </div>
  );
};

export default CartProduct;
