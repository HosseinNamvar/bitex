"use client";
import Image from "next/image";
import styles from "./cartItem.module.scss";
import { TCartItem } from "@/types/shoppingCart";
import { DeleteIcon, MinusIcon, PlusIcon } from "@/components/icons/svgIcons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { add, modifyQuantity, remove } from "@/store/shoppingCart";
import Quantity from "../../../quantity";

const CartItem = ({
  productName,
  productId,
  imgUrl,
  price,
  dealPrice = 0,
  quantity,
  url,
}: TCartItem) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (isReduced: boolean) => {
    isReduced
      ? dispatch(modifyQuantity({ amount: -1, productId }))
      : dispatch(modifyQuantity({ amount: 1, productId }));
  };
  return (
    <div className={styles.cartItem}>
      <div className={styles.leftCol}>
        <Image src={imgUrl} width={120} height={110} alt={productName} />
      </div>
      <div className={styles.rightCol}>
        <Link href={url} className={styles.productName}>
          {productName}
        </Link>
        <div className={styles.priceSection}>
          <span>
            {(quantity * price).toLocaleString("en-us", {
              minimumFractionDigits: 2,
            })}{" "}
            €
          </span>
          <span>
            {quantity > 1
              ? `${quantity} x ${price.toLocaleString("en-us", {
                  maximumFractionDigits: 2,
                })} €`
              : ""}{" "}
          </span>
        </div>
        <div className={styles.quantitySection}>
          <Quantity
            onChange={handleQuantityChange}
            quantity={quantity}
            iconWidth={8}
          />
          <button onClick={() => dispatch(remove(productId))}>
            <DeleteIcon width={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
