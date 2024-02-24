"use client";
import styles from "./productForm.module.scss";

import { TDropDown } from "@/types/uiElements";
import DropDownList from "@/components/UI/dropDown";
import Button from "@/components/UI/button";
import { useEffect, useState } from "react";
import { getAllCategoriesJSON } from "@/actions/category/category";
import { TGroupJSON } from "@/types/categories";
import { getCategorySpecs } from "@/actions/category/specifications";
import { ProductSpec, SpecGroup } from "@prisma/client";
import { TAddProductFormValues, TBrand } from "@/types/product";
import { getAllBrands } from "@/actions/brands/brands";

const categoryListFirstItem: TDropDown = {
  text: "Select A Category....",
  value: "",
};

const brandListFirstItem: TDropDown = {
  text: "Select A Brand....",
  value: "",
};

interface IProps {
  formValues: TAddProductFormValues;
  onChange: (props: TAddProductFormValues) => void;
}

const ProductForm = ({ formValues: props, onChange }: IProps) => {
  const [categoryList, setCategoryList] = useState<TDropDown[]>([
    categoryListFirstItem,
  ]);
  const [brandList, setBrandList] = useState<TDropDown[]>([brandListFirstItem]);
  const [selectedCategoryListIndex, setSelectedCategoryListIndex] = useState(0);
  const [selectedBrandListIndex, setSelectedBrandListIndex] = useState(0);

  const [categorySpecs, setCategorySpecs] = useState<SpecGroup[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategoriesJSON();
      if (result.res) {
        setCategoryList(convertJSONtoDropdownList(result.res));
      }
    };

    const fetchBrands = async () => {
      const result = await getAllBrands();
      if (result.res) {
        setBrandList(convertBrandsToDropdownList(result.res));
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

    const convertBrandsToDropdownList = (brandList: TBrand[]): TDropDown[] => {
      const dropDownData: TDropDown[] = [brandListFirstItem];
      brandList.forEach((brand) => {
        dropDownData.push({
          text: brand.name,
          value: brand.id,
        });
      });

      return dropDownData;
    };

    fetchCategories();
    fetchBrands();
  }, []);

  const handleCategoryChange = (index: number) => {
    setSelectedCategoryListIndex(index);
    if (index === 0) {
      onChange({
        ...props,
        specifications: JSON.parse(JSON.stringify(props.specifications)),
        categoryID: "",
      });
      setCategorySpecs([]);
    } else {
      getSpecGroup(categoryList[index].value);
    }
  };

  const handleBrandChange = (index: number) => {
    setSelectedBrandListIndex(index);
    onChange({ ...props, brandID: brandList[index].value });
  };

  const getSpecGroup = async (categoryID: string) => {
    const response = await getCategorySpecs(categoryID);
    if (response.res) {
      const specArray: ProductSpec[] = [];
      response.res.forEach((item) => {
        specArray.push({
          specGroupID: item.id,
          specValues: item.specs.map(() => ""),
        });
      });
      onChange({
        ...props,
        specifications: JSON.parse(JSON.stringify(specArray)),
        categoryID: categoryID,
      });
      setCategorySpecs(response.res);
    }
  };

  const handleSpecialFeatureChange = (index: number, value: string) => {
    const newArray = [...props.specialFeatures];
    newArray[index] = value;
    onChange({ ...props, specialFeatures: newArray });
  };

  return (
    <div className={styles.productForm}>
      <div className={styles.nameAndCat}>
        <div>
          <span>Name:</span>
          <input
            type="text"
            value={props.name}
            placeholder="Name..."
            onChange={(e) =>
              onChange({
                ...props,
                name: e.currentTarget.value,
              })
            }
          />
        </div>
        <div>
          <span>Short Descriptions:</span>
          <input
            type="text"
            value={props.desc}
            onChange={(e) =>
              onChange({
                ...props,
                desc: e.currentTarget.value,
              })
            }
            placeholder="Short Description..."
          />
        </div>
        <div className={styles.specialFeatures}>
          <span>Special Features:</span>
          <div>
            <input
              type="text"
              value={props.specialFeatures[0]}
              onChange={(e) =>
                handleSpecialFeatureChange(0, e.currentTarget.value)
              }
            />
            <input
              type="text"
              value={props.specialFeatures[1]}
              onChange={(e) =>
                handleSpecialFeatureChange(1, e.currentTarget.value)
              }
            />
            <input
              type="text"
              value={props.specialFeatures[2]}
              onChange={(e) =>
                handleSpecialFeatureChange(2, e.currentTarget.value)
              }
            />
          </div>
        </div>
        <div>
          <span>Price:</span>
          <input
            type="number"
            value={props.price}
            onChange={(e) =>
              onChange({
                ...props,
                price: e.currentTarget.value,
              })
            }
            placeholder="0.00€"
          />
        </div>
        <div>
          <span>Sale Price:</span>
          <input
            type="number"
            value={props.salePrice}
            onChange={(e) =>
              onChange({
                ...props,
                salePrice: e.currentTarget.value,
              })
            }
            placeholder="0.00€"
          />
        </div>
        <div>
          <span>Is In Stock:</span>
          <div className={styles.inStockSwitch}>
            <span
              className={props.isAvailable ? styles.available : ""}
              onClick={() => onChange({ ...props, isAvailable: true })}
            >
              In Stock
            </span>
            <span
              className={!props.isAvailable ? styles.notAvailable : ""}
              onClick={() => onChange({ ...props, isAvailable: false })}
            >
              Out Of Stock
            </span>
          </div>
        </div>
        <div>
          <span>Brand:</span>
          <DropDownList
            data={brandList}
            width="200px"
            selectedIndex={selectedBrandListIndex}
            onChange={handleBrandChange}
          />
        </div>
        <div>
          <span>Images:</span>
          <div className={styles.imgInputsContainer}>
            {props.images.map((img, index) => (
              <input
                key={index}
                type="text"
                value={img}
                onChange={(e) => {
                  props.images[index] = e.currentTarget.value;
                  onChange({ ...props });
                }}
              />
            ))}
          </div>
          <Button
            text="+"
            onClick={() => {
              props.images.push("");
              onChange({ ...props });
            }}
          />
          <Button
            text="-"
            onClick={() => {
              props.images.pop();
              onChange({ ...props });
            }}
          />
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
              {categorySpecs.map((specGroup, groupIndex) => (
                <div className={styles.specGroupRow} key={specGroup.id}>
                  <span className={styles.header}>{specGroup.title}</span>
                  <>
                    {specGroup.specs.map((spec, specIndex) => (
                      <div className={styles.specRow} key={specIndex}>
                        <span>{spec}</span>
                        <input
                          type="text"
                          value={
                            props.specifications[groupIndex]?.specValues[
                              specIndex
                            ]
                          }
                          onChange={(e) => {
                            props.specifications[groupIndex].specValues[
                              specIndex
                            ] = e.currentTarget.value;
                            onChange({ ...props });
                          }}
                        />
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
