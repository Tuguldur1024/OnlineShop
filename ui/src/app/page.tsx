"use client";
import Image from "next/image";
import Product from "@/components/Product";
import BigProduct from "@/components/BigProduct";
import { useEffect, useState } from "react";
import axios from "axios";

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

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const [frontProducts, setFrontProducts] = useState<ProductType[] | undefined>(
    undefined
  );
  const [middleProducts, setMiddleProducts] = useState<
    ProductType[] | undefined
  >(undefined);
  const [lowerProducts, setLowerProducts] = useState<ProductType[] | undefined>(
    undefined
  );

  useEffect(() => {
    axios
      .get("http://localhost:8000/product/getProducts")
      .then(function (response) {
        const fetchedProducts = response.data.products;
        setProducts(fetchedProducts);

        setFrontProducts(fetchedProducts.slice(0, 4));
        setMiddleProducts(fetchedProducts.slice(4, 11));
        setLowerProducts(fetchedProducts.slice(11, 19));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage: "url('/images/homePage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
        className="px-[200px] h-[446px] flex items-end mb-5"
      >
        <div className="flex flex-col">
          <p className="text-lg">Wildflower Hoodie</p>
          <p className="flex items-center h-16 text-4xl font-bold text-[#000000]">
            120’000₮
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center mb-12">
        {frontProducts?.map((eProduct, index) => (
          <Product key={index} {...eProduct} />
        ))}
      </div>
      <div className="flex gap-5 items-center justify-center mb-12">
        <div className="flex flex-col gap-12">
          <div className="flex gap-5">
            {middleProducts?.[0] && <Product {...middleProducts[0]} />}
            {middleProducts?.[1] && <Product {...middleProducts[1]} />}
          </div>
          {middleProducts?.[2] && <BigProduct {...middleProducts[2]} />}
        </div>
        <div className="flex flex-col gap-12">
          {middleProducts?.[3] && <BigProduct {...middleProducts[3]} />}
          <div className="flex gap-5">
            {middleProducts?.[4] && <Product {...middleProducts[4]} />}
            {middleProducts?.[5] && <Product {...middleProducts[5]} />}
          </div>
        </div>
      </div>
      <div className="max-w-[1040px] mx-auto gap-x-5 grid grid-cols-4 gap-y-12 items-center justify-center mb-24">
        {lowerProducts?.map((eProduct, index) => (
          <Product key={index} {...eProduct} />
        ))}
      </div>
    </div>
  );
}
