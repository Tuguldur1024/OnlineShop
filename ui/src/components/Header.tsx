"use client";
import Pinecone from "../../public/icons/pinecone";
import FinderGlass from "../../public/icons/finderGlass";
import Heart from "../../public/icons/heart";
import ShoppingCart from "../../public/icons/shoppingCart";
import UserProfile from "../../public/icons/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/providers/AuthProviders";
import axios from "axios";

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

const Header = (): JSX.Element => {
  const { currentUser, isLoading, logout } = useAuthContext();
  const [numberOfLoved, setNumberOfLoved] = useState<number>(0);

  const [searchName, setSearchName] = useState<string>("");
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (currentUser) {
      axios
        .post("http://localhost:8001/user/getUserById", { id: currentUser })
        .then((response) => {
          setNumberOfLoved(response.data.user.savedProducts.length);
        })
        .catch((error) => console.error(error));
    } else {
      setNumberOfLoved(0);
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8001/product/searchProducts",
          { name: searchName }
        );
        console.log(response);
        // setSearchedProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchName]);

  return (
    <div className="bg-black">
      <div className="w-full container mx-auto justify-between py-5 pl-8 pr-6 flex">
        <div className="flex gap-1.5 justify-center items-center">
          <Link href="/">
            <div className="flex gap-1.5 items-center justify-center">
              <Pinecone />
              <p className="text-white text-sm font-normal mr-[26px]">
                ECOMMERCE
              </p>
            </div>
          </Link>
          <Link href="/category">
            <button className="text-white opacity-75 text-sm font-normal hover:underline">
              Ангилал
            </button>
          </Link>
        </div>
        <div className="flex gap-2 rounded-2xl bg-[#18181B] px-4 py-2">
          <FinderGlass />
          <input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Бүтээгдэхүүн хайх"
            className="bg-[#18181B] text-white"
          />
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link href="/likedProducts">
            <div className="relative mr-1 flex items-center justify-center">
              <Heart />
              <div className="top-[-7px] left-[14px] absolute w-4 h-4 rounded-full text-[10px] flex items-center justify-center bg-[#2563EB] text-white">
                {numberOfLoved}
              </div>
            </div>
          </Link>

          {!isLoading && currentUser ? (
            <div className="flex gap-4 items-center justify-center">
              <Link href="/myCard">
                <ShoppingCart />
              </Link>
              <Link href="/userinfo">
                <UserProfile />
              </Link>
              <button
                onClick={() => {
                  logout();
                }}
                className="px-3 py-2 items-center justify-center rounded-3xl text-white bg-[#2563EB]"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2 items-center justify-center">
              <Link href="/auth/signup">
                <button className="hover:bg-[#2563EB] px-3 py-2 items-center justify-center rounded-3xl border border-[#2563EB] text-white">
                  Бүртгүүлэх
                </button>
              </Link>
              <Link href="/auth/signin">
                <button className="px-3 py-2 items-center justify-center rounded-3xl text-white bg-[#2563EB]">
                  Нэвтрэх
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
