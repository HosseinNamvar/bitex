"use client";
import { deleteProduct } from "@/actions/product/product";
import styles from "./productListItem.module.scss";

import Button from "@/components/UI/button";
import Popup from "@/components/UI/popup";
import { TProductListItem } from "@/types/product";
import { useState } from "react";

interface IProps {
  data: TProductListItem;
  requestReload: () => void;
}

const ProductListItem = ({ data, requestReload }: IProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    const response = await deleteProduct(data.id);
    if (response.error) {
      setIsLoading(false);
    }
    if (response.res) {
      setIsLoading(false);
      requestReload();
    }
  };

  return (
    <div className={styles.productListItem}>
      <span className={styles.name}>{data.name}</span>
      <span className={styles.category}>{data.category.name}</span>
      <div>
        <Button text="edit" onClick={() => console.log("edit product")} />
        <Button text="delete" onClick={() => setShowDelete(true)} />
      </div>
      {showDelete && (
        <Popup
          content={<span className={styles.deleteMsg}>Are You Sure?</span>}
          width="300px"
          isLoading={isLoading}
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={() => handleDelete()}
          cancelBtnText="NO"
          confirmBtnText="YES"
        />
      )}
    </div>
  );
};

export default ProductListItem;
