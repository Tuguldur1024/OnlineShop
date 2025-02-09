"use client";
import Product from "@/components/Product";

type product = {
  name: string;
  price: number;
  productId: string;
};

const myProducts: product[] = [
  {
    name: "The Prompt Magazine",
    price: 120000,
    productId: "30",
  },
  {
    name: "Wildflower Hoodie",
    price: 120000,
    productId: "30",
  },
  {
    name: "The Prompt Magazine",
    price: 120000,
    productId: "30",
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    productId: "30",
  },
  {
    name: "The Prompt Magazine",
    price: 120000,
    productId: "30",
  },
  {
    name: "Wildflower Hoodie",
    price: 120000,
    productId: "30",
  },
  {
    name: "The Prompt Magazine",
    price: 120000,
    productId: "30",
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    productId: "30",
  },
  {
    name: "The Prompt Magazine",
    price: 120000,
    productId: "30",
  },
  {
    name: "Wildflower Hoodie",
    price: 120000,
    productId: "30",
  },
  {
    name: "The Prompt Magazine",
    price: 120000,
    productId: "30",
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    productId: "30",
  },
];

const categories: string[] = [
  "Малгай",
  "Усны сав",
  "T-shirt",
  "Hoodie",
  "Цүнх",
  "Tee",
];

const sizes: string[] = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];

const Category = () => {
  return (
    <div className="flex justify-center mt-16 mb-[92px]">
      <div className="flex flex-col gap-4 mr-[178px]">
        <p className="font-bold text-[#000000] text-base">Ангилал</p>
        <div className="flex flex-col gap-4 mb-8">
          {categories.map((category, index) => {
            return (
              <div key={index} className="flex gap-2">
                <input type="checkbox" value={category} defaultChecked={true} />
                <p className="text-[#09090B] font-medium"> {category} </p>
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
        {myProducts.map((oneProduct, index) => {
          return <Product key={index} {...oneProduct} />;
        })}
      </div>
    </div>
  );
};
export default Category;
