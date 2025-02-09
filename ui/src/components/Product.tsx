"use client";
import Link from "next/link";
import LoveReaction from "../../public/icons/loveReaction";
import { useAuthContext } from "@/providers/AuthProviders";
import axios from "axios";
import { useState } from "react";

type product = {
  categoryId: string;
  coupon: string;
  createdAt: Date;
  description: string;
  images: string[];
  price: number;
  productName: string;
  quantity: number;
  salePercent: string;
  _id: string;
  thumbnails: string;
};

const Product = ({ productName, price, _id, images }: product) => {
  const { signin, currentUser } = useAuthContext();

  const handleLoveClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (currentUser) {
      console.log(currentUser);
      console.log(_id);
      const updateduser = await axios.post(
        "http://localhost:8000/user/SaveProducts",
        {
          id: currentUser,
          productId: _id,
        }
      );
    }
  };

  return (
    <Link
      href={`/productDetail?ProductId=${_id}`}
      className="flex flex-col gap-2 cursor-pointer"
    >
      <div
        style={{
          backgroundImage: `url('${images[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-2xl flex items-start justify-end p-4 w-[245px] h-[331px]"
      >
        <div
          className="w-10 h-10 flex items-center justify-center"
          onClick={handleLoveClick}
        >
          <LoveReaction />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#000000] font-normal text-base">{productName}</p>
        <p className="text-base font-bold">{price}₮</p>
      </div>
    </Link>
  );
};

export default Product;
