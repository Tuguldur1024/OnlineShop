"use client";
import { ChangeEvent, useState } from "react";

function hasSpecialCharacter(str: string): boolean {
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(str);
  return hasSpecialChar;
}

const hasUpperCase = (str: string): boolean => {
  return str.toLowerCase() != str;
};
const hasLowerCase = (str: string): boolean => {
  return str.toLowerCase() != str;
};
const hasNumber = (str: string): boolean => {
  return /\d/.test(str);
};

const RecoverPassword = () => {
  const [tomUseg, setTomUseg] = useState<string>("#71717A");
  const [jijigUseg, setJijigUseg] = useState<string>("#71717A");
  const [too, setToo] = useState<string>("#71717A");
  const [temdegt, setTemdegt] = useState<string>("#71717A");

  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");

  const signUp = () => {
    if (password != rePassword) {
      console.log("Bro davtsan code buruu baina");
      setPasswordMessage("Нууц үг ижил биш байна");
    } else {
      if (!hasSpecialCharacter(password)) {
        setTemdegt("#E11D48");
      } else {
        setTemdegt("#71717A");
      }
      if (!hasLowerCase(password)) {
        setJijigUseg("#E11D48");
      } else {
        setJijigUseg("#71717A");
      }
      if (!hasUpperCase(password)) {
        setTomUseg("#E11D48");
      } else {
        setTomUseg("#71717A");
      }
      if (!hasNumber(password)) {
        setToo("#E11D48");
      } else {
        setToo("#71717A");
      }
    }
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleRePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setRePassword(event.target.value);
  };

  return (
    <div className="flex mx-auto flex-col gap-8 items-center w-[334px] mt-[108px] mb-[380px]">
      <p className="text-[#09090B] font-semibold text-2xl"> Нууц үг сэргээх </p>
      <div className="flex flex-col gap-4 w-full">
        <input
          value={password}
          onChange={handlePassword}
          placeholder="Шинэ нууц үг"
          className="rounded-3xl shadow-sm border border-[#E4E4E7] px-3 py-2 bg-[#F7F7F8]"
        />
        <div className="w-full flex flex-col gap-1">
          <input
            value={rePassword}
            onChange={handleRePassword}
            placeholder="Шинэ нууц үг давтах "
            className="py-2 px-3  border bg-[#F7F7F8] border-[#E4E4E7] rounded-3xl"
          />
          {passwordMessage.length != 0 && (
            <p className="text-[#E11D48] text-xs font-normal">
              {passwordMessage}
            </p>
          )}
        </div>
        <ul className="text-xs list-disc ml-4">
          <li className={`text-[${tomUseg}]`}>Том үсэг орсон байх</li>
          <li className={`text-[${jijigUseg}]`}>Жижиг үсэг орсон байх</li>
          <li className={`text-[${too}]`}>Тоо орсон байх</li>
          <li className={`text-[${temdegt}]`}>Тэмдэгт орсон байх</li>
        </ul>
        <button
          onClick={signUp}
          className="rounded-3xl flex items-center justify-center w-full py-2 text-white bg-[#2563EB] shadow-sm"
        >
          Үүсгэх
        </button>
      </div>
    </div>
  );
};

export default RecoverPassword;
