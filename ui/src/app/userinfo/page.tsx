"use client";
import { useState } from "react";
import { UserSection } from "@/components/userSection";
import { OrderHistory } from "@/components/OrderHistory";

const UserInfo = () => {
  const [colorUser, setColorUser] = useState<string>("#F7F7F8");
  const [colorOrder, setColorOrder] = useState<string>("#FFFFFF");
  const [pageNumber, setPageNumber] = useState<number>(1);

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
    <div className="h-[790px]">
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
        {pageNumber === 2 && <OrderHistory />}
      </div>
    </div>
  );
};
export default UserInfo;
