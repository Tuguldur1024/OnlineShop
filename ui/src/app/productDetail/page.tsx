"use client";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { New } from "@/components/New";
import LoveReaction from "../../../public/icons/loveReaction";
import StarRating from "@/components/Rating";
import Product from "@/components/Product";

const sizes: string[] = ["S", "M", "L", "XL", "2XL"];
const images: number[] = [0, 2, 3, 4];

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

type StarRatingProps = {
  rating: number;
  totalReviews: number;
};

type cartType = {
  productId: string;
  quantity: number;
  price: number;
  images: string[];
  name: string;
};

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("ProductId");

  const [product, setProduct] = useState<ProductType>();
  const [selected, setSelected] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const [relativeProducts, setRelativeProducts] = useState<ProductType[]>();

  const rating: StarRatingProps = {
    rating: 4.6,
    totalReviews: 24,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.post(
          "http://localhost:8001/product/getProductById",
          {
            id: productId,
          }
        );
        setProduct(productResponse.data.product);
        if (productResponse.data.product?.categoryId) {
          const categoryResponse = await axios.post(
            "http://localhost:8001/product/getProductsByCategory",
            {
              categoryId: productResponse.data.product.categoryId,
            }
          );
          setRelativeProducts(categoryResponse.data.products.slice(0, 8));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

  const handleChooseSize = (index: number) => {
    setSelected(index);
  };
  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const AddToCart = () => {
    try {
      setLoading(true);
      const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const existingProductIndex = currentCart.findIndex(
        (item: cartType) => item.productId === productId
      );

      if (existingProductIndex !== -1) {
        currentCart[existingProductIndex].quantity += quantity;
      } else {
        currentCart.push({
          productId,
          quantity,
          price: product?.price,
          images: product?.images,
          name: product?.productName,
        });
      }

      localStorage.setItem("cart", JSON.stringify(currentCart));

      setLoading(false);
      console.log("Product added to cart:", currentCart);
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setError("An error occurred while adding the product to your cart.");
      setLoading(false);
    }
  };

  const minus = () => {
    if (quantity > 1) {
      setQuantity((e) => e - 1);
    }
  };
  const plus = () => {
    setQuantity((e) => e + 1);
  };
  return (
    <div className="pt-14 mx-auto w-fit flex flex-col gap-20">
      <div className="flex gap-5 ">
        <div className="flex flex-col justify-center gap-2">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                onClick={() => handleImageClick(image)}
                style={{
                  backgroundImage: `url(${product?.images[image]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="w-[67px] h-[67px] rounded-md"
              ></div>
            );
          })}
        </div>
        <div
          style={{
            backgroundImage: `url(${product?.images[selectedImage]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="rounded-2xl w-[422px] h-[521px]"
        ></div>
        <div className="flex flex-col gap-4 justify-end">
          <div className="flex flex-col gap-3">
            <New />
            <div className="flex gap-2">
              <p className="font-bold text-2xl text-[#000000]">
                {product?.productName}
              </p>
              <LoveReaction />
            </div>
            <p className="text-base max-w-[511px] text-[#000000]">
              {product?.description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Хэмжээний заавар</p>
            <div className="flex gap-1 items-center ">
              {sizes.map((size, index) => {
                let backgroundColor: string = "#FFFFFF";
                let textColor: string = "#09090B";
                if (index == selected) {
                  backgroundColor = "#18181B";
                  textColor = "white";
                }
                return (
                  <button
                    onClick={() => handleChooseSize(index)}
                    key={index}
                    className={`w-8 h-8 flex items-center bg-[${backgroundColor}] text-${textColor} justify-center rounded-full border border-[#18181B]`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex gap-1 mb-2">
            <button
              onClick={minus}
              className="w-8 h-8 border border-[#18181B] rounded-full bg-white flex items-center justify-center"
            >
              -
            </button>
            <p className="flex w-8 h-8 items-center justify-center">
              {quantity}
            </p>
            <button
              onClick={plus}
              className="w-8 h-8 border border-[#18181B] bg-white rounded-full flex items-center justify-center"
            >
              +
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl text-black"> {product?.price}₮ </p>
            <button
              onClick={AddToCart}
              className="font-medium text-sm bg-[#2563EB] text-white rounded-3xl flex items-center justify-center py-2 w-[175px]"
            >
              Сагсанд нэмэх
            </button>
          </div>
          <div className="mt-[39px]">
            <div className="flex gap-4">
              <p>Үнэлгээ</p>
              <button className="text-[#2563EB] underline">
                бүгдийг харах
              </button>
            </div>
            <StarRating {...rating} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-bold text-[#000000] text-3xl">Холбоотой бараа</p>
        <div className="max-w-[1040px] mx-auto gap-x-5 grid grid-cols-4 gap-y-12 items-center justify-center mb-24">
          {relativeProducts?.map((eProduct, index) => (
            <Product key={index} {...eProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
