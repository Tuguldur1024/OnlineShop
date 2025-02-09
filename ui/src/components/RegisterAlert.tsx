"use client";
import ErrorIcon from "../../public/icons/error";

const RegisterAlert = () => {
  return (
    <div className="absolute right-9 bottom-9 flex p-4 gap-3 border bg-[#F7F7F8] border-[#EF444480] border-opacity-50 w-[512px] rounded-lg h-[72px]">
      <ErrorIcon />
      <div className="flex flex-col gap-1">
        <p className="text-[#EF4444] font-medium text-base leading-4">
          Алдаа гарлаа
        </p>
        <p className="text-[#EF4444] font-normal">
          Тухайн алдаа яагаад тухай нэмэлт тайлбар энд бичигднэ.
        </p>
      </div>
    </div>
  );
};

export default RegisterAlert;
