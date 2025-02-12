"use client";
import { useAuthContext } from "@/providers/AuthProviders";
import { useEffect, useState } from "react";
import axios from "axios";
import LikedProducts from "@/components/LikedProducts";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8001";

const LikedProduct = () => {
  const { currentUser, isLoading } = useAuthContext();
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  useEffect(() => {
    try {
      axios
        .post(`${API_URL}/user/getUserById`, { id: currentUser })
        .then(function (response) {
          setLikedProducts(response.data.user.savedProducts);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [currentUser]);
  return (
    <div className="flex flex-col">
      <LikedProducts {...likedProducts} />
    </div>
  );
};
export default LikedProduct;
