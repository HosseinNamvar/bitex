"use client";
import styles from "./adminCategories.module.scss";

import CatGroupRow from "@/components/admin/category/rowGroup";
import {
  TGetAllCategories,
  getAllCategories,
} from "@/actions/category/category";
import AddCategoryGroup from "@/components/admin/category/addCategoryGroup";
import { useEffect, useState } from "react";

const AdminCategories = () => {
  const [allCategories, setAllCategories] = useState<TGetAllCategories[]>([]);

  const getData = async () => {
    const data = await getAllCategories();
    if (data.res) setAllCategories(data.res);
  };

  useEffect(() => {
    getData();
  }, []);

  const groups: TGetAllCategories[] = [];
  const categories: TGetAllCategories[] = [];

  if (allCategories.length > 0) {
    allCategories.forEach((cat) => {
      cat.parentID === null ? groups.push(cat) : categories.push(cat);
    });
  }
  return (
    <div className={styles.categoryList}>
      <div className={styles.head}>
        <h3>Add:</h3>
        <AddCategoryGroup onReset={getData} />
      </div>
      <div className={styles.dataTable}>
        {groups.length > 0 &&
          groups.map((group) => (
            <div className={styles.catLevel1} key={group.id}>
              <CatGroupRow
                onReset={getData}
                data={group}
                categories={categories}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminCategories;
