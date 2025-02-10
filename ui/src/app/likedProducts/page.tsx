"use client";
import { useAuthContext } from "@/providers/AuthProviders";
import { useEffect, useState } from "react";
import axios from "axios";
import LikedProducts from "@/components/LikedProducts";

const LikedProduct = () => {
  const { currentUser, isLoading } = useAuthContext();
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  useEffect(() => {
    try {
      axios
        .post("http://localhost:8001/user/getUserById", { id: currentUser })
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
