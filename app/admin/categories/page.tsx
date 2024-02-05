"use client";
import styles from "./adminCategories.module.scss";

import Button from "@/components/UI/button";
import { CategoriesData } from "@/data/categories";
import CatRow from "./_components/row";

const AdminCategories = () => {
  return (
    <div className={styles.categoryList}>
      <div className={styles.head}>
        <h3>Add new category:</h3>
        <Button text="Add" onClick={() => console.log("Add Cat")} />
      </div>
      <div className={styles.dataTable}>
        {CategoriesData.map((item, index) => (
          <div className={styles.catLevel1} key={index}>
            <CatRow text={item.name} />

            {item.subCategories?.map((item2, index2) => (
              <div className={styles.catLevel2} key={index2}>
                <CatRow text={item2.name} />

                {item2.subCategories?.map((item3, index3) => (
                  <div className={styles.catLevel3} key={index3}>
                    <CatRow text={item3.name} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
