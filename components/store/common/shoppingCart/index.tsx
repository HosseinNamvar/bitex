"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { ICartState, RootState } from "@/store/shoppingCart";

import styles from "./shoppingCart.module.scss";
import CartItem from "./_components/cartItem";
import { CloseIcon, ShoppingIconEmpty } from "@/components/icons/svgIcons";
import { useEffect, useState } from "react";

interface IProps {
  isVisible: boolean;
  quantity?: number;
  handleOnClose: () => void;
}

const ShoppingCart = ({ isVisible, quantity = 0, handleOnClose }: IProps) => {
  const [cartItems, setCartItems] = useState<ICartState>();
  const localCartItems = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    localCartItems && setCartItems(localCartItems);
  }, [localCartItems]);

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
        <div className={styles.itemsContainer}>
          {cartItems && cartItems.items.length > 0 ? (
            cartItems.items.map((item) => (
              <CartItem
                imgUrl={item.imgUrl}
                price={item.price}
                productId={item.productId}
                productName={item.productName}
                quantity={item.quantity}
                key={item.productId}
                url={item.url}
              />
            ))
          ) : (
            <div className={styles.emptyContainer}>
              <div className={styles.icon}>
                <ShoppingIconEmpty width={36} />
              </div>
              <span>
                Please
                <Link href={""}>SIGN IN</Link>
                to view your saved Cart.
              </span>
            </div>
          )}
          <div className={styles.lowerSection}>
            {cartItems && cartItems.items.length > 0 && (
              <button className={styles.checkout}>CHECKOUT</button>
            )}
            <button onClick={handleOnClose}>Back to Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
