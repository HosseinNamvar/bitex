"use client";
import styles from "./homeCategoryList.module.scss";

import { useEffect, useState } from "react";

import CategoryListItem from "./_components/catListItem";
import { TGroupJSON } from "@/types/categories";
import { getAllCategoriesJSON } from "@/actions/category/category";
import { SK_Box } from "@/components/UI/skeleton";

const HomeCategoryList = () => {
  const [categories, setCategories] = useState<TGroupJSON[]>([]);
  useEffect(() => {
    const getCategoriesDB = async () => {
      const result = await getAllCategoriesJSON();
      if (result.res) {
        setCategories(result.res);
      }
    };
    getCategoriesDB();
  }, []);

  return (
    <div className={styles.categoriesContainer}>
      <ul>
        {!categories || categories.length === 0 ? (
          <div className={styles.loading}>{Skeletons()}</div>
        ) : (
          categories.map((item, index) => (
            <CategoryListItem key={index} categoryData={item} />
          ))
        )}
      </ul>
    </div>
  );
};

const Skeletons = () => {
  const skeletons: React.ReactNode[] = [];
  for (let i = 0; i <= 10; i++) {
    skeletons.push(<SK_Box key={i} width="100%" height="16px" />);
  }
  return skeletons;
};

export default HomeCategoryList;
