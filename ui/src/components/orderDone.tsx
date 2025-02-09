"use client";
import { CorrectSign } from "../../public/icons/correctSign";

type StepProps = {
  next: () => void;
};

const orderDone: React.FC<StepProps> = ({ next }) => {
  return (
    <div className="flex items-center gap-4 w-[360px]">
      <CorrectSign />
      <p> Захиалга амжилттай баталгаажлаа.</p>
      <button
        className="px-4 py-3 items-center border border-gray-100 bg-black text-white"
        onClick={() => next()}
      >
        {" "}
        Нүүр хэсэг рүү буцах{" "}
      </button>
    </div>
  );
};
export default orderDone;
