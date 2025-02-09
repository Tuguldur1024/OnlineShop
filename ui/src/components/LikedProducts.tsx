import { useEffect, useState } from "react";
import axios from "axios";
import ClickedLove from "./ClickedLove";

type Product = {
  productName: string;
  categoryId: string;
  price: number;
  quantity: number;
  thumbnails: string;
  images: string[];
  coupon: string;
  salePercent: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

const LikedProducts = (likedProducts: string[]) => {
  const [myProducts, setMyProducts] = useState<Product[]>([]);
  useEffect(() => {
    try {
      axios
        .post("http://localhost:8000/product/getLikedProducts", {
          likedProducts,
        })
        .then(function (response) {
          setMyProducts(response.data.products);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [likedProducts]);
  const objectLength: number = Object.keys(likedProducts).length;
  const handleBuy = (e: number) => {
    console.log(myProducts[e]);
  };
  const unClick = (e: number) => {
    console.log(myProducts[e]);
  };
  console.log(myProducts);
  return (
    <div className="flex flex-col mt-16 justify-center mx-auto w-[622px] gap-4 mb-[200px]">
      <div className="flex gap-1">
        <p className="text-[#121316] font-bold text-xl">Хадгалсан бараа </p>
        <p className="text-[#5E6166] font-medium text-xl">({objectLength})</p>
      </div>
      {myProducts.map((oneProduct, index) => {
        return (
          <div
            key={index}
            className="w-full flex justify-between p-4 items-center bg-[#F7F7F8] border border-[#ECEDF0] rounded-2xl gap-6"
          >
            <div
              style={{
                backgroundImage: `url('${oneProduct.images[0]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-24 h-24 rounded-2xl "
            ></div>
            <div className="flex flex-col gap-2 w-[400px] justify-start items-start">
              <div className="flex flex-col gap-1">
                <p>{oneProduct.productName}</p>
                <p className="font-bold">{oneProduct.price}₮</p>
              </div>
              <button
                onClick={() => handleBuy(index)}
                className="bg-[#2563EB] text-white px-3 py-1 font-medium rounded-2xl"
              >
                Сагслах
              </button>
            </div>
            <div onClick={() => unClick(index)}>
              {" "}
              <ClickedLove />{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LikedProducts;
