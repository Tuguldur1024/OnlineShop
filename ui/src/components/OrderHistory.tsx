import { useAuthContext } from "@/providers/AuthProviders";

export const OrderHistory = () => {
  const { currentUser } = useAuthContext();
  return (
    <div className="flex flex-col gap-6 w-[620px] items-end">
      <p className="w-full items-start font-bold text-lg">Захиалгын түүх</p>
      <div className="border border-[#E4E4E7] w-full"></div>
    </div>
  );
};
