"use client";
import { useState, useEffect } from "react";

import { VerifyOtp } from "@/components/VerifyOtp";
import axios from "axios";
import { VerifyOtpProps } from "@/components/VerifyOtp";
import { ChangePassword } from "@/components/ChangePassword";
import { useAuthContext } from "@/providers/AuthProviders";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [stage, setStage] = useState<number>(0);
  const sendOtp = async () => {
    if (email.includes("@") === false) {
      alert("Имэйл хаяг буруу байна");
    } else {
      setStage(1);
      // try {
      //   const response = await axios.post(
      //     "http://localhost:8001/otp/GenerateAndSendOtp",
      //     { email }
      //   );
      //   console.log(response);
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  const props: VerifyOtpProps = {
    email: email,
    setStage: setStage,
  };

  return (
    <div className="pt-[100px] flex justify-center items-center mb-[500px]">
      {stage === 0 && (
        <div className="flex flex-col justify-center items-center w-[334px] mt-auto">
          <p className="mb-6 font-semibold text-2xl color-[#09090B]">
            Нууц үг сэргээх
          </p>
          <input
            placeholder="Имэйл хаяг оруулах"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#E4E4E7] shadow-sm bg-[#FFFFFF] pl-3 py-3 rounded-3xl"
          />
          <button
            onClick={sendOtp}
            className="text-base font-medium w-full bg-[#2563EB] py-3 mt-4 rounded-3xl text-white"
          >
            Илгээх
          </button>
        </div>
      )}
      {stage === 1 && <VerifyOtp {...props} />}
      {stage === 2 && <ChangePassword {...props} />}
    </div>
  );
};

export default Home;
