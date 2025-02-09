"use client";

import { useState } from "react";
import { useAuthContext } from "@/providers/AuthProviders";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, currentUser } = useAuthContext();

  const router = useRouter();

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    try {
      await axios
        .post("http://localhost:8000/user/Signin", {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response.data.user.id);
          signin(response.data.user.id);
          router.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  if (currentUser) {
    return (
      <div className="flex items-center justify-center flex-col pt-[104px] gap-8 w-[334px] mx-auto mb-[374px]">
        <p className="font-semibold text-[#09090B] text-2xl">Welcome back!</p>
        <p className="text-[#71717A]">You are already logged in.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-col pt-[104px] gap-8 w-[334px] mx-auto mb-[374px]">
      <p className="font-semibold text-[#09090B] text-2xl">Нэвтрэх</p>
      <div className="flex w-full flex-col gap-4 mb-4">
        <input
          type="email"
          placeholder="Имэйл хаяг"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2  bg-white border border-[#E4E4E7] shadow-sm rounded-3xl"
        />
        <input
          type="password"
          placeholder="Нууц үг"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2  bg-white border border-[#E4E4E7] shadow-sm rounded-3xl"
        />
        <button
          onClick={handleSignIn}
          className="bg-[#2563EB] py-2 rounded-3xl shadow-sm text-[#FAFAFA] font-medium w-full flex items-center justify-center"
        >
          Нэвтрэх
        </button>
        <button className="underline  decoration-solid">Нууц үг мартсан</button>
      </div>
      <button className="w-full flex items-center py-2 text-[#2563EB] justify-center rounded-3xl bg-[#FFFFFF] border border-[#2563EB] shadow-sm">
        Бүртгүүлэх
      </button>
    </div>
  );
};

export default SignIn;
