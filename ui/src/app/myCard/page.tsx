"use client";
import { useAuthContext } from "@/providers/AuthProviders";
import FirstStep from "@/components/BuyFirstStep";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SecondStep from "@/components/BuySecondStep";
import orderDone from "@/components/orderDone";

const MyCard = () => {
  const { currentUser, isLoading } = useAuthContext();

  const [currentstep, setCurrentStep] = useState<number>(1);

  const router = useRouter();
  if (!currentUser) {
    router.back();
  }

  const handleStepPlus = () => {
    if (currentstep < 4) {
      setCurrentStep((e) => e + 1);
    }
  };
  const handleStepMinus = () => {
    if (currentstep > 1) {
      setCurrentStep((e) => e - 1);
    }
  };

  return (
    <div className="flex flex-col mt-7">
      {currentstep == 1 && <FirstStep next={handleStepPlus} />}
      {currentstep == 2 && (
        <SecondStep next={handleStepPlus} previous={handleStepMinus} />
      )}
      {/* {currentstep == 3 && <orderDone next={handleStepPlus} />} */}
    </div>
  );
};
export default MyCard;
