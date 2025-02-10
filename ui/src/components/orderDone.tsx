"use client";
import { OrderFinish } from "../../public/icons/orderFinish";

type StepProps = {
  next: () => void;
};

const OrderDone: React.FC<StepProps> = ({ next }) => {
  return (
    <div className="flex flex-col items-center gap-20 w-[360px] mx-auto mt-[100px]">
      <div className="flex items-center flex-col py-14 gap-4 bg-[#F7F7F8] w-full rounded-2xl">
        <OrderFinish />
        <p> Захиалга амжилттай баталгаажлаа.</p>
      </div>

      <button
        className="bg-[#2563EB] py-2 px-9 text-[#FAFAFA] font-medium rounded-3xl shadow-sm border border-[#E4E4E7] flex items-center"
        onClick={() => next()}
      >
        Нүүр хэсэг рүү буцах
      </button>
    </div>
  );
};
export default OrderDone;
