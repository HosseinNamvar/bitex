"use client";
import styles from "./adminCategories.module.scss";

import CatGroupRow from "./_components/rowGroup";
import { TReadGroup, getAllGroups } from "@/actions/category/categoryGroup";
import AddCategoryGroup from "@/components/admin/category/addCategoryGroup";
import { useEffect, useState } from "react";

const AdminCategories = () => {
  const [allGroups, setAllGroup] = useState<TReadGroup[]>([]);

  const getData = async () => {
    const data = await getAllGroups();
    if (data.res) setAllGroup(data.res);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.categoryList}>
      <div className={styles.head}>
        <h3>Add:</h3>
        <AddCategoryGroup onReset={getData} />
      </div>
      <div className={styles.dataTable}>
        {allGroups.length > 0 &&
          allGroups.map((group) => (
            <div className={styles.catLevel1} key={group.id}>
              <CatGroupRow onReset={getData} data={group} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminCategories;
