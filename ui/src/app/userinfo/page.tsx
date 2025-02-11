"use client";
import { useState, useEffect } from "react";
import { UserSection } from "@/components/userSection";
import { OrderHistory } from "@/components/OrderHistory";
import { useAuthContext } from "@/providers/AuthProviders";
import axios from "axios";

export type orderDetail = {
  productId: string;
  quantity: number;
  price: number;
  images: string[];
  name: string;
};

export type order = {
  createdAt: Date;
  details: orderDetail[];
  address: string;
  _id: string;
  deliveredDate: Date;
  firstName: string;
  lastName: string;
  secondPhoneNumber: string;
  status: string;
  totalAmount: string;
  updatedAt: Date;
  userId: string;
};

const UserInfo = () => {
  const { currentUser } = useAuthContext();

  const [colorUser, setColorUser] = useState<string>("#F7F7F8");
  const [colorOrder, setColorOrder] = useState<string>("#FFFFFF");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [orders, setOrders] = useState<order[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8001/order/getOrdersByUserId",
          {
            userId: currentUser,
          }
        );
        setOrders(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, [currentUser]);

  const userClick = () => {
    setColorUser("#F7F7F8");
    setColorOrder("#FFFFFF");
    setPageNumber(1);
  };

  const orderClick = () => {
    setColorUser("#FFFFFF");
    setColorOrder("#F7F7F8");
    setPageNumber(2);
  };

  return (
    <div className="min-h-[790px] h-fit">
      <div className="flex gap-5 pt-[100px] justify-center">
        <div className="flex flex-col gap-1 w-[265px] ">
          <button
            onClick={() => userClick()}
            className={`bg-[${colorUser}] pr-[92px] text-[#09090B] font-bold items-start py-2 w-full pl-4 rounded-2xl`}
          >
            Хэрэглэгчийн хэсэг
          </button>
          <button
            onClick={() => orderClick()}
            className={`bg-[${colorOrder}] pr-[92px] text-[#09090B] font-bold items-start py-2 w-full pl-4 rounded-2xl`}
          >
            Захиалгын түүх
          </button>
        </div>
        {pageNumber === 1 && <UserSection />}
        {pageNumber === 2 && <OrderHistory orders={orders} />}
      </div>
    </div>
  );
};
export default UserInfo;
