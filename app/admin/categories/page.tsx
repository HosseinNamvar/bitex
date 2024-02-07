import styles from "./adminCategories.module.scss";

import Button from "@/components/UI/button";
import { CategoriesData } from "@/data/categories";
import CatRow from "./_components/row";
import { getAllGroups } from "@/actions/category/getAll";
import AddCategory from "@/components/admin/category/addCategory";

const AdminCategories = async () => {
  const allGroups = await getAllGroups();

  return (
    <div className={styles.categoryList}>
      <div className={styles.head}>
        <h3>Add:</h3>
        <AddCategory />
      </div>
      {typeof allGroups !== "string" &&
        allGroups.map((group) => <span key={group.id}>{group.name}</span>)}
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
