import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { VerifyOtpProps } from "./VerifyOtp";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

export const ChangePassword = ({ email }: VerifyOtpProps) => {
  const router = useRouter();

  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [colorTomUseg, setColorTomUseg] = useState<string>("#71717A");
  const [colorJijigUseg, setColorJijigUseg] = useState<string>("#71717A");
  const [colorToo, setColorToo] = useState<string>("#71717A");
  const [colorTemdegt, setColorTemdegt] = useState<string>("#71717A");

  const newPasswordGenerate = () => {
    let passwordOkay = true;
    const regex = /[^A-Za-z0-9]/;
    if (password !== passwordRepeat) {
      alert("Нууц үг тохирохгүй байна");
      return;
    }
    if (password === password.toLowerCase()) {
      setColorTomUseg("#E11D48");
      passwordOkay = false;
    }
    if (password === password.toUpperCase()) {
      setColorJijigUseg("#E11D48");
      passwordOkay = false;
    }
    if (/\d/.test(password) === false) {
      setColorToo("#E11D48");
      passwordOkay = false;
    }
    if (regex.test(password) === false) {
      setColorTemdegt("#E11D48");
      passwordOkay = false;
    }
    if (passwordOkay === false) {
      return;
    }
    setColorJijigUseg("#71717A");
    setColorTemdegt("#71717A");
    setColorTomUseg("#71717A");
    setColorToo("#71717A");
    try {
      axios
        .post(`${API_URL}/user/updatePassword`, {
          email,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Амжилттай өөрчлөгдлөө");
            router.push("/auth/signin");
          } else {
            alert("Амжилтгүй боллоо дахин оролдоно уу");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-[334px] mt-auto">
      <p className="font-semibold text-2xl text-[#09090B]"> Нууц үг сэргээх</p>
      <div className="flex flex-col gap-4 justify-center items-center w-full">
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="pl-3 w-full border border-[#E4E4E7] shadow-sm bg-[#FFFFFF] px-2 py-3 rounded-3xl"
          placeholder="Шинэ нууц үг"
        />
        <input
          value={passwordRepeat}
          type="password"
          onChange={(e) => setPasswordRepeat(e.target.value)}
          className="pl-3 w-full border border-[#E4E4E7] shadow-sm bg-[#FFFFFF] px-2 py-3 rounded-3xl"
          placeholder="Шинэ нууц үг давтах"
        />
        <div className="flex flex-col gap-1 justify-start w-full">
          <p className={`text-sm text-[${colorTomUseg}] font-medium`}>
            • Том үсэг орсон байх
          </p>
          <p className={`text-sm text-[${colorJijigUseg}] font-medium`}>
            • Жижиг үсэг орсон байх
          </p>
          <p className={`text-sm text-[${colorToo}] font-medium`}>
            • Тоо орсон байх
          </p>
          <p className={`text-sm text-[${colorTemdegt}] font-medium`}>
            • Тэмдэгт орсон байх
          </p>
        </div>
        <button
          onClick={() => newPasswordGenerate()}
          className="text-base font-medium w-full bg-[#2563EB] py-3 rounded-3xl text-white"
        >
          Үүсгэх
        </button>
      </div>
    </div>
  );
};
