"use client";
import { useAuthContext } from "@/providers/AuthProviders";
import FirstStep from "@/components/BuyFirstStep";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import SecondStep from "@/components/BuySecondStep";
import OrderDone from "@/components/OrderDone";

const MyCard = () => {
  const { currentUser, isLoading } = useAuthContext();
  const [currentstep, setCurrentStep] = useState<number>(3);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.back();
    }
  }, [currentUser, router]);

  const handleStepPlus = () => {
    if (currentstep === 3) {
      router.push("/");
    }
    if (currentstep < 3) {
      setCurrentStep((e) => e + 1);
    }
  };
  const handleStepMinus = () => {
    if (currentstep > 1) {
      setCurrentStep((e) => e - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-7 h-[790px]">
      {currentstep === 1 && <FirstStep next={handleStepPlus} />}
      {currentstep === 2 && (
        <SecondStep next={handleStepPlus} previous={handleStepMinus} />
      )}
      {currentstep === 3 && <OrderDone next={handleStepPlus} />}
    </div>
  );
};

export default MyCard;
