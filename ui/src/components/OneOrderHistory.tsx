import { order } from "@/app/userinfo/page";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { OrderHistoryScroll } from "./OrderHistoryScroll";

type props = {
  order: order;
};

export const OneOrderHistory = ({ order }: props) => {
  const [upOrDown, setUpOrDown] = useState<number>(1);

  console.log(upOrDown);
  console.log(order);

  const clickUpDown = () => {
    if (upOrDown == 1) {
      setUpOrDown(2);
    } else {
      setUpOrDown(1);
    }
  };

  return (
    <div className="flex flex-col px-6 py-8 rounded-2xlbg-[#F7F7F8] bg-[#F7F7F8] gap-4 w-full">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="font-bold text-lg"> {order.createdAt.toString()} </p>
          <div className="text-white bg-[#2563EB] py-[2px] px-2.5 rounded-full">
            {order.status}
          </div>
        </div>
        <button onClick={() => clickUpDown()} className="flex items-center">
          {upOrDown == 1 && <FaChevronDown />}
          {upOrDown == 2 && <FaChevronUp />}
        </button>
      </div>
      {upOrDown == 2 && <OrderHistoryScroll order={order} />}
      <div className="w-full flex justify-between">
        <p> Үнийн дүн: </p>
        <p className="font-bold text-lg"> {order.totalAmount}₮ </p>
      </div>
    </div>
  );
};
