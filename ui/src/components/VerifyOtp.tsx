import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { VerifyEmail } from "../../public/icons/EmailVerify";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export type VerifyOtpProps = {
  email: string;
  setStage: (stage: number) => void;
};

export function VerifyOtp({ email, setStage }: VerifyOtpProps) {
  const [otp, setOtp] = useState<string>("");
  useEffect(() => {
    if (otp.length === 6) {
      verifyOtp();
    }
  }, [otp]);
  const verifyOtp = async () => {
    setStage(2); // odoohondoo status irj chdq baigaa uchraas shuud yvuulchii daraa ni ene muriig avna
    // try {
    //   const response = await axios.post("http://localhost:8001/otp/VerifyOtp", {
    //     email,
    //     otp,
    //   });
    //   if (response.status === 200) {
    //     alert("Баталгаажуулал амжилттай боллоо");
    //     setStage(2);
    //   }
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <VerifyEmail />
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="font-bold text-xl text-[#09090B]"> Баталгаажуулах</p>
        <p className="text-[#18181B]                                                                                            ">
          {email} хаягт илгээсэн баталгаажуулах кодыг оруулна уу
        </p>
      </div>
      <InputOTP
        value={otp}
        onChange={(value) => setOtp(value)}
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
