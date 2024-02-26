"use client";
import Image from "next/image";
import styles from "./cartItem.module.scss";
import { TCartItemData } from "@/types/shoppingCart";
import { DeleteIcon, MinusIcon, PlusIcon } from "@/components/icons/svgIcons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { add, modifyQuantity, remove } from "@/store/shoppingCart";
import Quantity from "../../../quantity";
import { useRouter } from "next/navigation";

interface IProps {
  data: TCartItemData;
  onLinkClicked: () => void;
}

const CartItem = ({ data, onLinkClicked }: IProps) => {
  const {
    productName,
    productId,
    imgUrl,
    price,
    dealPrice = 0,
    quantity,
  } = data;

  const dispatch = useDispatch();
  const router = useRouter();
  const handleQuantityChange = (isReduced: boolean) => {
    isReduced
      ? dispatch(modifyQuantity({ amount: -1, productId }))
      : dispatch(modifyQuantity({ amount: 1, productId }));
  };
  const currentPrice = dealPrice === 0 ? price : dealPrice;

  const handleGoToPage = () => {
    router.push("/product/" + productId);
    onLinkClicked();
  };
  return (
    <div className={styles.cartItem}>
      <div className={styles.leftCol} onClick={handleGoToPage}>
        <Image src={imgUrl} width={120} height={110} alt={productName} />
      </div>
      <div className={styles.rightCol}>
        <h2 className={styles.productName} onClick={handleGoToPage}>
          {productName}
        </h2>
        <div className={styles.priceSection}>
          <span>
            {(quantity * currentPrice).toLocaleString("en-us", {
              minimumFractionDigits: 2,
            })}{" "}
            €
          </span>
          <span>
            {quantity > 1
              ? `${quantity} x ${currentPrice.toLocaleString("en-us", {
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
