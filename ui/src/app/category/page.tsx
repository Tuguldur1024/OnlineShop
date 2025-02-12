"use client";
import Product from "@/components/Product";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

type product = {
  _id: string;
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

type category = {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

const sizes: string[] = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];

const Category = () => {
  const [categories, setCategories] = useState<category[]>([]);
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    const productsFetch = async () => {
      try {
        const response = await axios.get(`${API_URL}/product/getProducts`);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    const categoriesFetch = async () => {
      try {
        const response = await axios.get(`${API_URL}/category/getCategories`);
        setCategories(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    categoriesFetch();
    productsFetch();
  }, []);

  console.log(categories[0]);
  return (
    <div className="flex justify-center mt-16 mb-[92px]">
      <div className="flex flex-col gap-4 mr-[178px]">
        <p className="font-bold text-[#000000] text-base">Ангилал</p>
        <div className="flex flex-col gap-4 mb-8">
          {categories.map((category, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  value={category.name}
                  defaultChecked={true}
                />
                <p className="text-[#09090B] font-medium">{category.name}</p>
              </div>
            );
          })}
        </div>
        <p className="text-[#000000] font-bold">Хэмжээ</p>
        <div className="flex flex-col gap-4 mb-8">
          {sizes.map((size, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input type="checkbox" value={size} defaultChecked={true} />
                <p className="text-[#09090B] font-medium"> {size} </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-12">
        {products.map((oneProduct, index) => {
          return <Product key={index} {...oneProduct} />;
        })}
      </div>
    </div>
  );
};
export default Category;
