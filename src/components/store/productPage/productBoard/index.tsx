"use client";

import Link from "next/link";
import { useState } from "react";

import { TProductBoard } from "@/types/product";

import AddToCartButton from "../addToCartButton";
import { StarIcon, HeartIcon } from "@/components/icons/svgIcons";
import { TCartItem } from "@/types/shoppingCart";
import Quantity from "../../common/quantity";

const ProductBoard = ({ boardData }: { boardData: TProductBoard }) => {
  const { name, id, isAvailable, specialFeatures, price, shortDesc, dealPrice, defaultQuantity } = boardData;
  const [quantity, setQuantity] = useState(defaultQuantity > 1 ? defaultQuantity : 1);

  const handleQuantityChange = (isReducing: boolean) => {
    isReducing ? (quantity === 1 ? quantity : setQuantity(quantity - 1)) : setQuantity(quantity + 1);
  };

  const cartItemData: TCartItem = {
    productId: id,
    quantity: quantity,
  };
  return (
    <div className="w-full relative flex flex-col">
      <button className="absolute right-0 top-0 border-none p-1 bg-white">
        <HeartIcon
          width={22}
          className="fill-white cursor-pointer transition-colors duration-300 stroke-1 stroke-gray-400 hover:fill-gray-300"
        />
      </button>
      <section className="block w-full">
        <div className="flex items-center gap-0.5">
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <Link href={"#"} className="ml-4 text-xs text-bitex-blue-300">
            880 User Reviews
          </Link>
        </div>
      </section>
      <h1 className="block text-2xl leading-9 font-medium my-2.5 mt-8 text-gray-700">{name}</h1>
      <span className="block text-xs text-gray-700 mb-4">{shortDesc}</span>
      <hr className="w-full border-t border-gray-300 mb-5" />
      <div className="flex flex-col gap-3 text-sm text-gray-500 mb-12">
        {specialFeatures && specialFeatures?.map((feature, index) => <span key={index}>{feature}</span>)}
      </div>
      <h2 className="text-3xl font-medium text-gray-800 mb-5">
        {(dealPrice ? dealPrice : price).toLocaleString("en-us", {
          minimumIntegerDigits: 2,
          minimumFractionDigits: 2,
        })}{" "}
        €
      </h2>

      {dealPrice && (
        <div className="mb-5 text-sm">
          <span className="text-white rounded-sm bg-bitex-red-500 px-3 py-1">
            {`
            Save
            ${(price - dealPrice).toLocaleString("en-us", {
              minimumIntegerDigits: 2,
              minimumFractionDigits: 2,
            })} €
            `}
          </span>
          <span className="mt-[10px] block text-gray-800">Was {price} €</span>
        </div>
      )}
      <hr className="w-full border-t border-gray-300 mb-5" />

      {/* ----------------- ADD TO CART SECTION ----------------- */}
      <section className="flex items-center w-full">
        <Quantity onChange={handleQuantityChange} quantity={quantity} />
        <AddToCartButton cartItemData={cartItemData} disabled={!isAvailable} />
      </section>
    </div>
  );
};

export default ProductBoard;
