"use client";
import { CorrectSign } from "../../public/icons/correctSign";
import { useState, useEffect } from "react";
import axios from "axios";
import { SecondStepProduct } from "./SecondStepProduct";
import { useAuthContext } from "@/providers/AuthProviders";

type IdQuantity = {
  productId: string;
  quantity: number;
};

type StepProps = {
  next: () => void;
  previous: () => void;
};

const SecondStep: React.FC<StepProps> = ({ next, previous }) => {
  const [cart, setCard] = useState<IdQuantity[]>([]);
  const { currentUser, isLoading } = useAuthContext();

  console.log(currentUser);

  const [userName, setUserName] = useState<string>("");

  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    try {
      const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCard(currentCart);
      axios
        .post("http://localhost:8000/product/getCardValue", { currentCart })
        .then(function (response) {
          setTotalValue(response.data.totalValue);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    try {
      axios
        .post("http://localhost:8000/user/getUserById", { id: currentUser })
        .then(function (response) {
          console.log(response);
          setUserName(response.data.user.userName);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) return <p> ...Loading bro </p>;
  return (
    <div className="flex flex-col gap-16 items-center justify-center mt-7 mb-20">
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center bg-[#2563EB] rounded-full">
          <CorrectSign />
        </div>
        <div className="border border-[#18181B] w-20 h-[1px]"></div>
        <div className="w-8 h-8 text-[#FFFFFF] font-bold text-base flex items-center justify-center bg-[#2563EB] rounded-full">
          2
        </div>
        <div className="border border-[#18181B] w-20 h-[1px]"></div>
        <div className="flex items-center justify-center rounded-full border border-[#18181B] bg-[#FFFFFF] w-8 h-8 text-[#09090B] ">
          3
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-[333px] flex flex-col gap-4 bg-[#F7F7F8] py-8 px-6 h-fit rounded-3xl">
          <div className="flex">
            <p className="text-[#000000] text-lg font-bold">Сагс</p>
            <p className="text-[#71717A] text-lg font-normal"> (4)</p>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            {cart.map((oneItem, index) => {
              return <SecondStepProduct key={index} {...oneItem} />;
            })}
          </div>
          <div className="flex justify-between">
            <p className="text-black"> Нийт төлөх дүн: </p>
            <p className="font-bold text-lg">{totalValue}₮</p>
          </div>
        </div>
        <div className="w-[687px] bg-[#F7F7F8] p-8 flex flex-col gap-9 rounded-3xl">
          <p className="text-[#09090B] font-semibold text-lg">
            2. Хүргэлтийн мэдээлэл оруулах
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-[#09090B] font-medium text-sm">Овог:</p>
              <input className="w-full rounded-2xl shadow-sm border border-[#E4E4E7] bg-[#FFFFFF]" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#09090B] font-medium text-sm">Нэр:</p>
              <input
                defaultValue={userName}
                className="w-full rounded-2xl shadow-sm border border-[#E4E4E7] py-1 px-3 bg-[#FFFFFF]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#09090B] font-medium text-sm">
                Утасны дугаар:
              </p>
              <input className="w-full rounded-2xl shadow-sm border border-[#E4E4E7] bg-[#FFFFFF]" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#09090B] font-medium text-sm">Хаяг:</p>
              <input className="w-full rounded-2xl shadow-sm border border-[#E4E4E7] h-[94px] bg-[#FFFFFF]" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#09090B] font-medium text-sm">
                Нэмэлт мэдээлэл:
              </p>
              <input className="w-full rounded-2xl shadow-sm border border-[#E4E4E7] h-[66px] bg-[#FFFFFF]" />
              <p className="text-[#71717A] text-xs">
                Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <button
              onClick={previous}
              className="bg-[#FFFFFF] py-2 px-9 text-[#18181B] font-medium rounded-3xl shadow-sm border border-[#E4E4E7] flex items-center"
            >
              Буцах
            </button>
            <button
              onClick={next}
              className="bg-[#2563EB] py-2 px-9 text-[#FAFAFA] font-medium rounded-3xl shadow-sm border border-[#E4E4E7] flex items-center"
            >
              Төлбөр төлөх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondStep;
