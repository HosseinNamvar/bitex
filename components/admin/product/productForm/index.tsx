"use client";
import styles from "./productForm.module.scss";

import { TDropDown } from "@/types/uiElements";
import DropDownList from "@/components/UI/dropDown";
import Button from "@/components/UI/button";
import { useEffect, useState } from "react";
import { getAllCategoriesJSON } from "@/actions/category/category";
import { TGroupJSON } from "@/types/categories";

const ProductForm = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [categories, setCategories] = useState<TDropDown[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategoriesJSON();
      if (result.res) {
        setCategories(convertJSONtoDropdownList(result.res));
      }
    };

    const convertJSONtoDropdownList = (json: TGroupJSON[]): TDropDown[] => {
      const dropDownData: TDropDown[] = [];
      json.forEach((group) => {
        dropDownData.push({
          text: group.group.name,
          value: group.group.id,
        });
        group.categories.forEach((category) => {
          dropDownData.push({
            text: group.group.name + " - " + category.category.name,
            value: category.category.id,
          });
          category.subCategories.forEach((sub) => {
            dropDownData.push({
              text:
                group.group.name +
                " - " +
                category.category.name +
                " - " +
                sub.name,
              value: sub.id,
            });
          });
        });
      });

      return dropDownData;
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (index: number) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div className={styles.productForm}>
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
          <span>Price:</span>
          <input type="number" placeholder="0.00€" />
        </div>
        <div>
          <span>Sale Price:</span>
          <input type="number" placeholder="0.00€" />
        </div>
        <div>
          <span>Category</span>
          <DropDownList
            data={categories}
            width="430px"
            selectedIndex={selectedCategoryIndex}
            onChange={handleCategoryChange}
          />
        </div>
      </div>
      <div className={styles.specs}>
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
    </div>
  );
};

export default ProductForm;
