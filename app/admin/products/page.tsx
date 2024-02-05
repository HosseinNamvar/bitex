"use client";
import Button from "@/components/UI/button";
import styles from "./adminProducts.module.scss";

const AdminProducts = () => {
  return (
    <div className={styles.adminProducts}>
      <div className={styles.header}>
        <Button
          text="Add new product"
          onClick={() => console.log("add product")}
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
          <span className={styles.name}>Dell 27" IPS</span>
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
    </div>
  );
};

export default AdminProducts;
