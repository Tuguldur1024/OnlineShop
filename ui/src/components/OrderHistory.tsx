import { useAuthContext } from "@/providers/AuthProviders";
import { useState, useEffect } from "react";
import axios from "axios";
import { orderDetail } from "@/app/userinfo/page";
import { order } from "@/app/userinfo/page";
import { OneOrderHistory } from "./OneOrderHistory";

type props = {
  orders: order[];
};

export const OrderHistory = ({ orders }: props) => {
  return (
    <div className="flex flex-col gap-6 w-[620px] items-end mb-10">
      <p className="w-full items-start font-bold text-lg">Захиалгын түүх</p>
      <div className="border border-[#E4E4E7] w-full"></div>
      <div className="w-full flex flex-col gap-4 ">
        {orders.map((order, index) => {
          return <OneOrderHistory key={index} order={order} />;
        })}
      </div>
    </div>
  );
};
