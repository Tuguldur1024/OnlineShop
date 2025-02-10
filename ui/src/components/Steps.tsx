import { useState } from "react";

const Steps = () => {
  const color1: string = "#2563EB";
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  const handleClick = (e: number) => {
    setSelectedNumber(e);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => handleClick(1)}
        className={`w-8 h-8 rounded-full flex text-center items-center justify-center 
            ${
              selectedNumber === 1
                ? "border border-#2563EB"
                : "border border-#18181B"
            }
            ${selectedNumber === 1 ? "text-white" : "text-#09090B"} ${
          selectedNumber === 1 ? "bg-[#2563EB]" : "bg-[#F7F7F8]"
        }`}
      >
        1
      </button>
      <div className="border border-[#18181B] w-20"></div>
      <button
        onClick={() => handleClick(2)}
        className={`w-8 h-8 rounded-full flex text-center items-center justify-center 
            ${
              selectedNumber === 2
                ? "border border-#2563EB"
                : "border border-#18181B"
            }
            ${selectedNumber === 2 ? "text-white" : "text-#09090B"} ${
          selectedNumber === 2 ? "bg-[#2563EB]" : "bg-[#F7F7F8]"
        }`}
      >
        2{" "}
      </button>
      <div className="border border-[#18181B] w-20"></div>
      <button
        onClick={() => handleClick(3)}
        className={`w-8 h-8 rounded-full flex text-center items-center justify-center 
            ${
              selectedNumber === 3
                ? "border border-#2563EB"
                : "border border-#18181B"
            }
            ${selectedNumber === 3 ? "text-white" : "text-#09090B"} ${
          selectedNumber === 3 ? "bg-[#2563EB]" : "bg-[#F7F7F8]"
        }`}
      >
        {" "}
        3{" "}
      </button>
    </div>
  );
};
export default Steps;
