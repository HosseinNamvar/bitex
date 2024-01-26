"use client";
import { ShoppingIconFill } from "@/components/icons/svgIcons";
import styles from "./addToCartButton.module.scss";
import { TCartItem } from "@/types/shoppingCart";
import { add } from "@/store/shoppingCart";
import { useDispatch } from "react-redux";

interface IProps {
  cartItemData: TCartItem;
}

const AddToCartButton = ({ cartItemData }: IProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(add({ ...cartItemData }));
    document.documentElement.classList.add("noScroll");
  };

  return (
    <button className={styles.addToCart} onClick={() => handleAddToCart()}>
      <ShoppingIconFill width={16} />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
