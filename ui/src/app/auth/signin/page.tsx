"use client";

import { useState } from "react";
import { useAuthContext } from "@/providers/AuthProviders";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, currentUser } = useAuthContext();

  const router = useRouter();

  
  const handleSignIn = async () => {
    if (!email || !password) {
      toast.error("Please fill in both fields.");
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/user/Signin`, {
        email,
        password,
      });
      if (response.data.message === "user not found") {
        toast.error("Оруулсан имэйл хаяг бүхий хэрэглэгч олдсонгүй");
      } else if (response.data.message === "invalid credentials") {
        toast.error("Хэрэглэгчийн нууц үг буруу байна");
      } else {
        signin(response.data.user.id);
        toast.success("Амжилттай нэвтэрлээ");
        router.push("/");
      }
    } catch (error) {
      toast.error("Нэвтрэхэд алдаа гарлаа");
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
        <button
          onClick={() => router.push("/recoverpassword")}
          className="underline  decoration-solid"
        >
          Нууц үг мартсан
        </button>
      </div>
      <button className="w-full flex items-center py-2 text-[#2563EB] justify-center rounded-3xl bg-[#FFFFFF] border border-[#2563EB] shadow-sm">
        Бүртгүүлэх
      </button>
    </div>
  );
};

export default SignIn;
