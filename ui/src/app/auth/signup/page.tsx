"use client";

import React, { useState, ChangeEvent } from "react";
import RegisterAlert from "@/components/RegisterAlert";
import axios from "axios";
import { useAuthContext } from "@/providers/AuthProviders";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
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

const SignUp = () => {
  const router = useRouter();

  const [tomUseg, setTomUseg] = useState<string>("#71717A");
  const [jijigUseg, setJijigUseg] = useState<string>("#71717A");
  const [too, setToo] = useState<string>("#71717A");
  const [temdegt, setTemdegt] = useState<string>("#71717A");

  const [name, setName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [validEmailMessage, setValidEmailMessage] = useState<string>("");

  const signUp = async () => {
    if (password != rePassword) {
      setPasswordMessage("Нууц үг ижил биш байна");
    } else {
      if (!emailAddress.includes("@")) {
        setValidEmailMessage("Зөв имэйл хаяг оруулна уу");
        return;
      }
      if (!hasSpecialCharacter(password)) {
        setTemdegt("#E11D48");
        return;
      }
      if (!hasLowerCase(password)) {
        setJijigUseg("#E11D48");
        return;
      }
      if (!hasUpperCase(password)) {
        setTomUseg("#E11D48");
        return;
      }
      if (!hasNumber(password)) {
        setToo("#E11D48");
        return;
      }
      await axios
        .post("http://localhost:8001/user/SignUp", {
          userName: name,
          email: emailAddress,
          password: password,
          phoneNumber: phoneNumber,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      router.push("/auth/signin");
    }
  };
  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleRePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setRePassword(event.target.value);
  };

  const handlePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const { currentUser, isLoading, signin } = useAuthContext();

  useEffect(() => {
    if (currentUser && !isLoading) {
      router.push("/");
    }
  }, [currentUser, isLoading]);

  return (
    <div className="pt-24 w-[334px] relative h-[800px] mx-auto flex flex-col items-center">
      <p className="text-[#09090B] text-2xl font-semibold mb-8"> Бүртгүүлэх</p>
      <div className="flex flex-col gap-4 w-full">
        <input
          value={name}
          onChange={handleName}
          placeholder="Нэр"
          className="py-2 px-3  border border-[#E4E4E7] rounded-3xl"
        />
        <div className="w-full flex flex-col gap-1">
          <input
            value={emailAddress}
            onChange={handleEmail}
            placeholder="Имэйл хаяг"
            className="w-full py-2 px-3  border border-[#E4E4E7] rounded-3xl"
          />
          {validEmailMessage.length != 0 && (
            <p className="text-[#E11D48] text-xs font-normal">
              {validEmailMessage}
            </p>
          )}
        </div>
        <input
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder="Утасны дугаар"
          className="py-2 px-3 border border-[#E4E4E7] rounded-3xl"
        />
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Нууц үг"
          className="py-2 px-3 border border-[#E4E4E7] rounded-3xl"
        />
        <div className="w-full flex flex-col gap-1">
          <input
            type="password"
            value={rePassword}
            onChange={handleRePassword}
            placeholder="Нууц үг давтах "
            className="py-2 px-3 border border-[#E4E4E7] rounded-3xl"
          />
          {passwordMessage.length != 0 && (
            <p className="text-[#E11D48] text-xs font-normal">
              {passwordMessage}
            </p>
          )}
        </div>

        <ul className="text-xs">
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
      <button className="rounded-3xl mt-12 flex justify-center items-center py-2 border border-[#2563EB] text-[#2563EB] w-full">
        Нэвтрэх
      </button>
      {/* <RegisterAlert /> */}
    </div>
  );
};
export default SignUp;
