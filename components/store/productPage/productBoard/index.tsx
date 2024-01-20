import Link from "next/link";

import { TProductBoard } from "@/types/product";

import styles from "./productBoard.module.scss";
import {
  ShoppingIconFill,
  MinusIcon,
  PlusIcon,
  StarIcon,
  HeartIcon,
} from "@/components/icons/svgIcons";

const ProductBoard = ({ boardData }: { boardData: TProductBoard }) => {
  const { name, options, price, shortDesc, dealDate, dealPrice } = boardData;
  return (
    <div className={styles.productBoard}>
      <button className={styles.favorite}>
        <HeartIcon width={22} />
      </button>
      <section>
        <div className={styles.stars}>
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <StarIcon width={15} stroke="#856B0F" fill="#FFD643" />
          <Link href={"#"}>880 User Reviews</Link>
        </div>
      </section>
      <h1>{name}</h1>
      <span className={styles.shortDesc}>{shortDesc}</span>
      <section className={styles.dealTime}>
        <span>Remained Time:</span>
        <span>{`${dealDate?.getHours()} : ${dealDate?.getMinutes()} : ${dealDate
          ?.getSeconds()
          .toLocaleString("en-us", { minimumIntegerDigits: 2 })}`}</span>
      </section>
      <h2 className={styles.price}>{dealPrice ? dealPrice : price} €</h2>
      {dealPrice && (
        <div className={styles.dealPrice}>
          <span className={styles.dealAmount}>
            {`
            Save
            ${(price - dealPrice).toLocaleString("en-us", {
              minimumIntegerDigits: 2,
              minimumFractionDigits: 2,
            })} €
            `}
          </span>
          <span className={styles.oldPrice}>Was {price} €</span>
        </div>
      )}
      <hr />
      {/* ----------------- OPTIONS SECTION ----------------- */}
      {options.map((option, index) => (
        <section key={index} className={styles.optionWrapper}>
          <div className={styles.optionName}>
            <span>{option.optionName}:</span>
            <span>
              {option.options[option.optionSelectedId].label ||
                option.options[option.optionSelectedId].value}
            </span>
          </div>
          <div
            className={`${styles.optionList} ${
              option.type === "color"
                ? styles.optionType_Color
                : styles.optionType_Text
            }`}
          >
            {option.type === "color"
              ? option.options.map((item, index) => (
                  <button
                    key={index}
                    className={
                      index === option.optionSelectedId ? styles.active : ""
                    }
                    style={
                      index === option.optionSelectedId
                        ? { borderColor: item.value }
                        : {}
                    }
                  >
                    <span style={{ backgroundColor: item.value }} />
                  </button>
                ))
              : option.options.map((item, index) => (
                  <button
                    key={index}
                    className={
                      index === option.optionSelectedId ? styles.active : ""
                    }
                  >
                    {item.value}
                  </button>
                ))}
          </div>
        </section>
      ))}

      {/* ----------------- ADD TO CART SECTION ----------------- */}
      <section className={styles.addToCartSection}>
        <div className={styles.quantity}>
          <button>
            <MinusIcon width={12} />
          </button>
          <span>8</span>
          <button>
            <PlusIcon width={12} />
          </button>
        </div>
        <button className={styles.addToCart}>
          <ShoppingIconFill width={16} />
          Add to Cart
        </button>
      </section>
    </div>
  );
};

export default ProductBoard;
