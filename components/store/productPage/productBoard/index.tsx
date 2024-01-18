import Image from "next/image";
import Link from "next/link";

import { TProductBoard } from "@/types/product";

import styles from "./productBoard.module.scss";

const ProductBoard = ({ boardData }: { boardData: TProductBoard }) => {
  const { name, options, price, shortDesc, dealDate, dealPrice } = boardData;
  return (
    <div className={styles.productBoard}>
      <section>
        <div className={styles.stars}>
          <Image src={""} alt="" width={15} height={15} />
          <Image src={""} alt="" width={15} height={15} />
          <Image src={""} alt="" width={15} height={15} />
          <Image src={""} alt="" width={15} height={15} />
          <Image src={""} alt="" width={15} height={15} />
          <Link href={"#"}>880 User Reviews</Link>
        </div>
        <button className={styles.favorite} />
      </section>
      <h1>{name}</h1>
      <span>{shortDesc}</span>
      <section>
        <span>Remained Time:</span>
        <span>{dealDate?.getDate()}</span>
      </section>
      <h2>{dealPrice ? dealPrice : price} €</h2>
      {dealPrice && (
        <>
          <span className={styles.dealAmount}>Save 100€</span>
          <span className={styles.oldPrice}>Was {price} €</span>
        </>
      )}
      <section className={styles.optionWrapper}>
        <div className={styles.optionName}>
          <span>Storage Capacity:</span>
          <span>128GB</span>
        </div>
        <div className={styles.optionList_Text}>
          <button>64GB</button>
          <button>128GB</button>
          <button>256GB</button>
        </div>
      </section>
      <section className={styles.optionWrapper}>
        <div className={styles.optionName}>
          <span>Color:</span>
          <span>Blue</span>
        </div>
        <div className={styles.optionList_Text}>
          <button style={{ backgroundColor: "#484848" }} />
          <button
            style={{ backgroundColor: "#388EDD" }}
            className={styles.active}
          />
          <button style={{ backgroundColor: "#7AC38F" }} />
          <button style={{ backgroundColor: "#ED4A4A" }} />
          <button style={{ backgroundColor: "#DD9D24" }} />
        </div>
      </section>
      <section>
        <div className={styles.quantity}>
          <button>-</button>
          <span>8</span>
          <button>+</button>
        </div>
        <button>Add to Cart</button>
      </section>
    </div>
  );
};

export default ProductBoard;
