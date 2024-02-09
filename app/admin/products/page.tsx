"use client";
import Button from "@/components/UI/button";
import styles from "./adminProducts.module.scss";
import RadioButton from "@/components/UI/radioButton";
import { useState } from "react";
import DropDownList from "@/components/UI/dropDown";
import { TDropDown } from "@/types/uiElements";
import { CategoriesData } from "@/data/categories";

const AdminProducts = () => {
  const [showProductWindow, setShowProductWindow] = useState(false);
  const category: TDropDown = {
    selectedIndex: 0,
    options: [
      {
        text: "text01",
        value: 0,
      },
      {
        text: "text02",
        value: 1,
      },
    ],
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
      {showProductWindow ? (
        <div className={styles.addProduct}>
          <div
            className={styles.background}
            onClick={() => setShowProductWindow(false)}
          />
          <div className={styles.productsWindow}>
            <div className={styles.header}>Add Product</div>
            <div className={styles.nameAndCat}>
              <div>
                <span>Name:</span>
                <input type="text" placeholder="Name..." />
              </div>
              <div>
                <span>Short Descriptions:</span>
                <input type="text" placeholder="Short Description..." />
              </div>
              <div>
                <span>Category</span>
                <DropDownList
                  data={category}
                  onChange={() => console.log("")}
                />
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.col1}>On the sale:</span>
              <div className={styles.col2}>
                <RadioButton id="1" value="Yes" groupName="isSale" />
                <RadioButton id="2" value="No" groupName="isSale" />
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.col1}></span>
              <div className={styles.col2}>
                <span>Duration:</span>
                <input type="text" />
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.col1}></span>
              <div className={styles.col2}>
                <span>Sale Price:</span>
                <input type="number" />
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.col1}>Options</span>
              <div className={styles.col3}>
                <span>Colors:</span>
                <div>
                  <input type="checkbox" />
                  <span>Red</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Blue</span>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.col1}></span>
              <div className={styles.col3}>
                <span>Storage Capacity:</span>
                <div>
                  <input type="checkbox" />
                  <span>128GB</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>256GB</span>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <span className={styles.col1}>Specifications:</span>
              <div className={styles.col3}>
                <span>Overall</span>
                <div>
                  <span>Dimension</span>
                  <input type="text" />
                  <Button onClick={() => console.log("")} text="+" />
                </div>
                <div>
                  <span>Special Features</span>
                  <input type="text" />
                  <Button onClick={() => console.log("")} text="+" />
                </div>
                <span>Cameras</span>
                <div>
                  <span>Front Camera</span>
                  <input type="text" />
                  <Button onClick={() => console.log("")} text="+" />
                </div>
              </div>
            </div>
            <div className={styles.windowControl}>
              <Button text="cancel" onClick={() => console.log("")} />
              <Button text="Add" onClick={() => console.log("")} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdminProducts;
