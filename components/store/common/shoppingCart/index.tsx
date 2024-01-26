"use client";

import { CloseIcon } from "@/components/icons/svgIcons";
import styles from "./shoppingCart.module.scss";
import CartItem from "./_components/cartItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store/shoppingCart";

interface IProps {
  isVisible: boolean;
  quantity?: number;
  handleOnClose: () => void;
}

const ShoppingCart = ({ isVisible, quantity = 0, handleOnClose }: IProps) => {
  const cartItems = useSelector((state: RootState) => state.cart);
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
        {cartItems.items.map((item) => (
          <CartItem
            imgUrl={item.imgUrl}
            price={item.price}
            productId={item.productId}
            productName={item.productName}
            quantity={item.quantity}
            key={item.productId}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
