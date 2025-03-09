"use client";
import styles from "./addToCartButton.module.scss";

import { useDispatch } from "react-redux";

import { ShoppingIconFill } from "@/components/icons/svgIcons";
import { TCartItem } from "@/types/shoppingCart";
import { add } from "@/store/shoppingCart";

interface IProps {
  disabled: boolean;
  cartItemData: TCartItem;
}

const AddToCartButton = ({ cartItemData, disabled }: IProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add({ ...cartItemData }));
    document.documentElement.classList.add("noScroll");
  };

  return (
    <button
      disabled={disabled}
      className={styles.addToCart}
      onClick={() => handleAddToCart()}
    >
      {disabled ? (
        "not Available"
      ) : (
        <>
          <ShoppingIconFill width={16} />
          Add to Cart
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
