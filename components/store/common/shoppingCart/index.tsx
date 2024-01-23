"use client";

import { CloseIcon } from "@/components/icons/svgIcons";
import styles from "./shoppingCart.module.scss";

interface IProps {
  isVisible: boolean;
  quantity?: number;
  handleOnClose: () => void;
}

const ShoppingCart = ({ isVisible, quantity = 0, handleOnClose }: IProps) => {
  return (
    <div
      className={`${styles.shoppingCart} ${!isVisible && styles.shoppingHide}`}
    >
      <div className={styles.background} onClick={handleOnClose} />
      <div className={`${styles.cartWindow} ${isVisible && styles.showWindow}`}>
        <div className={styles.header}>
          <h2>Shopping Cart ({quantity})</h2>
          <button onClick={handleOnClose}>
            <CloseIcon width={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
