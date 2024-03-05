"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { ICartState, RootState } from "@/store/shoppingCart";

import styles from "./shoppingCart.module.scss";
import CartItem from "./_components/cartItem";
import { CloseIcon, ShoppingIconEmpty } from "@/components/icons/svgIcons";
import { useEffect, useState } from "react";
import { getCartProducts } from "@/actions/product/product";
import { TCartItemData } from "@/types/shoppingCart";
import { TCartListItemDB } from "@/types/product";

interface IProps {
  isVisible: boolean;
  quantity?: number;
  handleOnClose: () => void;
}

const ShoppingCart = ({ isVisible, quantity, handleOnClose }: IProps) => {
  const [cartItems, setCartItems] = useState<TCartItemData[]>();
  const localCartItems = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const convertDBtoCartItems = (rawData: TCartListItemDB[]) => {
      const cartListItem: TCartItemData[] = [];
      rawData.forEach((item) => {
        cartListItem.push({
          productId: item.id,
          imgUrl: process.env.IMG_URL + item.images[0],
          price: item.price,
          quantity:
            localCartItems.items.find((f) => f.productId === item.id)
              ?.quantity || 0,
          productName: item.name,
          dealPrice: item.salePrice || undefined,
        });
      });
      if (cartListItem.length > 0) return cartListItem;
      return null;
    };
    const getProductsFromDB = async () => {
      const productsIDs = localCartItems.items.map((s) => s.productId);

      if (productsIDs?.length === 0) setCartItems([]);

      if (productsIDs) {
        const response = await getCartProducts(productsIDs);
        if (response.res) {
          const finalResult = convertDBtoCartItems(response.res);
          finalResult ? setCartItems(finalResult) : "";
        }
      }
    };

    if (localCartItems) {
      getProductsFromDB();
    }
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
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                data={item}
                onLinkClicked={handleOnClose}
                key={item.productId}
              />
            ))
          ) : (
            <div className={styles.emptyContainer}>
              <div className={styles.icon}>
                <ShoppingIconEmpty width={36} />
              </div>
              <span>Shopping Cart is Empty.</span>
            </div>
          )}
        </div>
        <div className={styles.lowerSection}>
          {cartItems && cartItems.length > 0 && (
            <button className={styles.checkout}>CHECKOUT</button>
          )}
          <button onClick={handleOnClose}>Back to Shop</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
