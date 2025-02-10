export const UserSection = () => {
  return (
    <div className="flex flex-col gap-6 w-[620px] items-end mb-[320px]">
      <p className="w-full items-start font-bold text-lg">Хэрэглэгчийн хэсэг</p>
      <div className="border border-[#E4E4E7] w-full"></div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <p className="font-medium text-[#09090B]">Нэр:</p>
          <input className="w-full rounded-2xl bg-[#E4E4E7] border border-[#FFFFFF] shadow-sm px-3 py-1" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="font-medium text-[#09090B]">Утасны дугаар:</p>
          <input className="w-full rounded-2xl bg-[#E4E4E7] border border-[#FFFFFF] shadow-sm px-3 py-1" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="font-medium text-[#09090B]">Имэйл хаяг:</p>
          <input className="w-full rounded-2xl bg-[#E4E4E7] border border-[#FFFFFF] shadow-sm px-3 py-1" />
        </div>
      </div>
      <button className="bg-[#2563EB] shadow-sm text-white px-9 py-2 rounded-3xl">
        Мэдээлэл шинэчлэх
      </button>
    </div>
  );
};
