"use client";
import styles from "./adminProducts.module.scss";

import { useState } from "react";
import Button from "@/components/UI/button";
import Popup from "@/components/UI/popup";
import ProductForm from "@/components/admin/product/productForm";
import { TAddProductFormValues } from "@/types/product";
import { addProduct } from "@/actions/product/product";

const initialForm: TAddProductFormValues = {
  name: "",
  desc: "",
  price: "",
  salePrice: "",
  images: [],
  categoryID: "",
  specifications: [],
};

const AdminProducts = () => {
  const [showProductWindow, setShowProductWindow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] =
    useState<TAddProductFormValues>(initialForm);

  const handleAddProduct = async () => {
    setIsLoading(true);
    const result = await addProduct(formValues);
    if (result.error) {
      setIsLoading(false);
    }
    if (result.res) {
      setIsLoading(false);
      setShowProductWindow(false);
    }
  };

  return (
    <div className={styles.adminProducts}>
      <div className={styles.header}>
        <Button
          text="Add new product"
          onClick={() => setShowProductWindow(true)}
        />
      </div>
      <div className={styles.dataTable}>
        <div className={styles.row}>
          <span className={styles.name}>AMD Ryzen</span>
          <span className={styles.category}>CPU</span>
          <div>
            <Button text="edit" onClick={() => console.log("edit product")} />
            <Button
              text="delete"
              onClick={() => console.log("delete product")}
            />
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Dell 27 inch IPS</span>
          <span className={styles.category}>Monitor</span>
          <div>
            <Button text="edit" onClick={() => console.log("edit product")} />
            <Button
              text="delete"
              onClick={() => console.log("delete product")}
            />
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Apple iPhone 6s 64GB</span>
          <span className={styles.category}>Mobile</span>
          <div>
            <Button text="edit" onClick={() => console.log("edit product")} />
            <Button
              text="delete"
              onClick={() => console.log("delete product")}
            />
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.name}>Asus Rog Pro</span>
          <span className={styles.category}>Laptop</span>
          <div>
            <Button text="edit" onClick={() => console.log("edit product")} />
            <Button
              text="delete"
              onClick={() => console.log("delete product")}
            />
          </div>
        </div>
      </div>
      {showProductWindow && (
        <Popup
          content={
            <ProductForm formValues={formValues} onChange={setFormValues} />
          }
          isLoading={isLoading}
          onCancel={() => setShowProductWindow(false)}
          onClose={() => setShowProductWindow(false)}
          onSubmit={() => handleAddProduct()}
          confirmBtnText="Add Product"
          title="Add New Product"
        />
      )}
    </div>
  );
};

export default AdminProducts;
