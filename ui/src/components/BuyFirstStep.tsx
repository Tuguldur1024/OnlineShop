import { useEffect, useState } from "react";
import axios from "axios";
import CartProduct from "./CartProduct";
import React from "react";

type StepProps = {
  next: () => void;
};

type IdQuantity = {
  productId: string;
  quantity: number;
  name: string;
  images: string[];
  price: number;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

const FirstStep: React.FC<StepProps> = ({ next }) => {
  const [cart, setCard] = useState<IdQuantity[]>([]);
  const [trashClear ,setTrashClear] = useState<boolean>(false);

  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    try {
      const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCard(currentCart);
      axios
        .post(`${API_URL}/product/getCardValue`, { currentCart })
        .then(function (response) {
          setTotalValue(response.data.totalValue);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [trashClear]);
  console.log(trashClear);
  const handleFirst = () => {
    next();
  };
  return (
    <div className="flex flex-col gap-[58px] items-center justify-center">
      <div className="flex items-center justify-center">
        <button
          className={`w-8 h-8 rounded-full flex text-center items-center justify-center  bg-[#2563EB] text-white`}
        >
          1
        </button>
        <div className="border border-[#18181B] w-20"></div>
        <button
          className={`w-8 h-8 rounded-full flex text-center bg-[#F7F7F8] "text-#09090B" items-center justify-center `}
        >
          2
        </button>
        <div className="border border-[#18181B] w-20"></div>
        <button
          className={`w-8 h-8 rounded-full flex text-center bg-[#F7F7F8] "text-#09090B" items-center justify-center `}
        >
          3
        </button>
      </div>
      <div className="flex flex-col gap-4 p-8 rounded-2xl bg-[#F7F7F8]">
        <p className="font-bold text-xl">1. Сагс</p>
        {cart.map((oneItem, index) => {
          return <CartProduct  key={index} {...oneItem} trashClear = {trashClear} setTrashClear={setTrashClear} />;
        })}
      </div>
      <div className="flex justify-between w-[574px] mb-2">
        <p className="text-lg font-normal text-black">Нийт төлөх дүн:</p>
        <p className="text-xl font-bold">{totalValue}₮</p>
      </div>
      <div className="flex justify-end w-[574px] mb-52">
        <button
          onClick={handleFirst}
          className="py-2 text-white shadow-sm bg-[#2563EB] flex items-center justify-center rounded-3xl w-[175px]"
        >
          Худалдан авах
        </button>
      </div>
    </div>
  );
};
export default FirstStep;
