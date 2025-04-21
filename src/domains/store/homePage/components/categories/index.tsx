"use client";

import { useEffect, useState } from "react";

import { getAllCategoriesJSON } from "@/actions/category/category";
import { SK_Box } from "@/shared/components/UI/skeleton";
import { TGroupJSON } from "@/shared/types/categories";

import CategoryListItem from "./catListItem";

export const HomeCategoryList = () => {
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
    <div className="min-w-[256px] absolute h-[500px] hidden lg:block bg-white mr-4 rounded-xl px-6 text-gray-800 shadow-md z-[3]">
      <ul className="mt-3">
        {!categories || categories.length === 0 ? (
          <div className="flex flex-col gap-7 justify-center mt-5">{Skeletons()}</div>
        ) : (
          categories.map((item, index) => (
            <CategoryListItem
              key={index}
              categoryData={item}
              className={index === categories.length - 1 ? "border-b-0" : ""}
            />
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
