import { order } from "@/app/userinfo/page";
import axios from "axios";

type props = {
  order: order;
};

export const OrderHistoryScroll = ({ order }: props) => {
  return (
    <div className="w-full h-fit flex flex-col gap-3">
      {order.details.map((oneDetail) => {
        return (
          <div className="flex gap-2">
            <div className="w-9 h-9">
              <img
                className="w-full h-full"
                alt="Product"
                src={`${oneDetail.images[0]}`}
              ></img>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-xs"> {oneDetail.name} </p>
              <div className="flex justify-between">
                <p className="text-xs">
                  {oneDetail.quantity} x {oneDetail.price}₮
                </p>
                <p className="font-bold text-xs">
                  {oneDetail.quantity * oneDetail.price}₮
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="border-b border/border-border mt-3"></div>
    </div>
  );
};
