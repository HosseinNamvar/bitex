"use client";

import { useState } from "react";
import styles from "./navShopping.module.scss";
import ShoppingCart from "../../common/shoppingCart";
import { ShoppingIconOutline } from "@/components/icons/svgIcons";

interface IProps {
  quantity: number;
}

const NavBarShopping = ({ quantity }: IProps) => {
  const [cartVisibility, setCartVisibility] = useState(false);

  const handleCartVisibility = (visibility: boolean) => {
    setCartVisibility(visibility);
    visibility
      ? document.documentElement.classList.add("noScroll")
      : document.documentElement.classList.remove("noScroll");
  };

  return (
    <div className={styles.shopping}>
      <button onClick={() => handleCartVisibility(true)}>
        <ShoppingIconOutline width={24} />
        <span
          className={`${quantity === 0 ? styles.emptyCart : styles.filledCart}`}
        >
          {quantity}
        </span>
      </button>
      <ShoppingCart
        isVisible={cartVisibility}
        handleOnClose={() => handleCartVisibility(false)}
      />
    </div>
  );
};

export default NavBarShopping;
