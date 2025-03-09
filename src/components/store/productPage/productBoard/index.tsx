"use client";
import styles from "./productBoard.module.scss";

import Link from "next/link";
import { useState } from "react";

import { TProductBoard } from "@/types/product";

import AddToCartButton from "../addToCartButton";
import { StarIcon, HeartIcon } from "@/components/icons/svgIcons";
import { TCartItem } from "@/types/shoppingCart";
import Quantity from "../../common/quantity";

const ProductBoard = ({ boardData }: { boardData: TProductBoard }) => {
  const {
    name,
    id,
    isAvailable,
    specialFeatures,
    price,
    shortDesc,
    dealPrice,
    defaultQuantity,
  } = boardData;
  const [quantity, setQuantity] = useState(
    defaultQuantity > 1 ? defaultQuantity : 1
  );

  const handleQuantityChange = (isReducing: boolean) => {
    isReducing
      ? quantity === 1
        ? quantity
        : setQuantity(quantity - 1)
      : setQuantity(quantity + 1);
  };

  const cartItemData: TCartItem = {
    productId: id,
    quantity: quantity,
  };
  return (
    <div className={styles.productBoard}>
      <button className={styles.favorite}>
        <HeartIcon width={22} />
      </button>
      <section>
        <div className={styles.stars}>
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <Link href={"#"}>880 User Reviews</Link>
        </div>
      </section>
      <h1>{name}</h1>
      <span className={styles.shortDesc}>{shortDesc}</span>
      <hr />
      <div className={styles.specialFeatures}>
        {specialFeatures &&
          specialFeatures?.map((feature, index) => (
            <span key={index}>{feature}</span>
          ))}
      </div>
      <h2 className={styles.price}>
        {(dealPrice ? dealPrice : price).toLocaleString("en-us", {
          minimumIntegerDigits: 2,
          minimumFractionDigits: 2,
        })}{" "}
        €
      </h2>

      {dealPrice && (
        <div className={styles.dealPrice}>
          <span className={styles.dealAmount}>
            {`
            Save
            ${(price - dealPrice).toLocaleString("en-us", {
              minimumIntegerDigits: 2,
              minimumFractionDigits: 2,
            })} €
            `}
          </span>
          <span className={styles.oldPrice}>Was {price} €</span>
        </div>
      )}
      <hr />

      {/* ----------------- ADD TO CART SECTION ----------------- */}
      <section className={styles.addToCartSection}>
        <Quantity onChange={handleQuantityChange} quantity={quantity} />
        <AddToCartButton cartItemData={cartItemData} disabled={!isAvailable} />
      </section>
    </div>
  );
};

export default ProductBoard;
