"use client";
import LoveReaction from "../../public/icons/loveReaction";

type ProductType = {
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

const BigProduct = (props: ProductType) => {
  const { productName, price } = props;
  return (
    <div className="flex flex-col gap-2 ">
      <div
        style={{
          backgroundImage: "url('/images/product.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`rounded-2xl flex items-start justify-end p-4 w-[508px] h-[692px]`}
      >
        <LoveReaction />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#000000] font-normal text-base"> {productName} </p>
        <p className="text-base font-bold">{price}₮</p>
      </div>
    </div>
  );
};

export default BigProduct;
