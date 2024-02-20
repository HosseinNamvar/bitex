"use client";
import styles from "./productForm.module.scss";

import { TDropDown } from "@/types/uiElements";
import DropDownList from "@/components/UI/dropDown";
import Button from "@/components/UI/button";
import { useEffect, useState } from "react";
import { getAllCategoriesJSON } from "@/actions/category/category";
import { TGroupJSON } from "@/types/categories";
import { getCategorySpecs } from "@/actions/category/specifications";
import { SpecGroup } from "@prisma/client";

const categoryListFirstItem: TDropDown = {
  text: "Select A Category....",
  value: "",
};

const ProductForm = () => {
  const [categoryList, setCategoryList] = useState<TDropDown[]>([
    categoryListFirstItem,
  ]);
  const [selectedCategoryListIndex, setSelectedCategoryListIndex] = useState(0);
  const [categoriesJSON, setCategoriesJSON] = useState<TGroupJSON[]>([]);
  const [selectedCategoryJSON, setSelectedCategoryJSON] = useState<
    number | null
  >(0);
  const [categorySpecs, setCategorySpecs] = useState<SpecGroup[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategoriesJSON();
      if (result.res) {
        setCategoryList(convertJSONtoDropdownList(result.res));
      }
    };

    const convertJSONtoDropdownList = (json: TGroupJSON[]): TDropDown[] => {
      const dropDownData: TDropDown[] = [categoryListFirstItem];
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
    setSelectedCategoryListIndex(index);
    if (index === 0) {
      setCategorySpecs([]);
    } else {
      getSpecGroup(categoryList[index].value);
    }
  };

  const getSpecGroup = async (categoryID: string) => {
    const response = await getCategorySpecs(categoryID);
    if (response.res) setCategorySpecs(response.res);
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
            data={categoryList}
            width="430px"
            selectedIndex={selectedCategoryListIndex}
            onChange={handleCategoryChange}
          />
        </div>
      </div>
      <div className={styles.specs}>
        <span>Specifications:</span>
        <div className={styles.specGroups}>
          {categorySpecs.length > 0 ? (
            <>
              {categorySpecs.map((specGroup) => (
                <div className={styles.specGroupRow} key={specGroup.id}>
                  <span className={styles.header}>{specGroup.title}</span>
                  <>
                    {specGroup.specs.map((spec, index) => (
                      <div className={styles.specRow} key={index}>
                        <span>{spec}</span>
                        <input type="text" />
                      </div>
                    ))}
                  </>
                </div>
              ))}
            </>
          ) : (
            <span>Can not Find! </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
