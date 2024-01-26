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
  return (
    <button
      className={styles.addToCart}
      onClick={() => dispatch(add({ ...cartItemData }))}
    >
      <ShoppingIconFill width={16} />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
