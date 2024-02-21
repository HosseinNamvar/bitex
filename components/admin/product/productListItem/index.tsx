"use client";
import styles from "./productListItem.module.scss";

import Button from "@/components/UI/button";
import { TProductListItem } from "@/types/product";

const ProductListItem = ({ data }: { data: TProductListItem }) => {
  return (
    <div className={styles.productListItem}>
      <span className={styles.name}>{data.name}</span>
      <span className={styles.category}>{data.category.name}</span>
      <div>
        <Button text="edit" onClick={() => console.log("edit product")} />
        <Button text="delete" onClick={() => console.log("delete product")} />
      </div>
    </div>
  );
};

export default ProductListItem;
