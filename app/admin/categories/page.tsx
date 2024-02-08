import styles from "./adminCategories.module.scss";

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
        <AddCategory onReset={getAllGroups} />
      </div>
      <div className={styles.dataTable}>
        {typeof allGroups !== "string" &&
          allGroups.map((group) => (
            <div className={styles.catLevel1} key={group.id}>
              <CatRow name={group.name} type="group" catId={group.id} />
            </div>
          ))}
        {CategoriesData.map((item, index) => (
          <div className={styles.catLevel1} key={index}>
            {/* <CatRow name={item.name} /> */}

            {item.subCategories?.map((item2, index2) => (
              <div className={styles.catLevel2} key={index2}>
                {/* <CatRow name={item2.name} /> */}

                {item2.subCategories?.map((item3, index3) => (
                  <div className={styles.catLevel3} key={index3}>
                    {/* <CatRow name={item3.name} /> */}
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
