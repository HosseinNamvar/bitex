import styles from "./homeCategoryList.module.scss";
import CategoryListItem from "./_components/catListItem";
import { CategoriesData } from "@/data/categories";

const HomeCategoryList = () => {
  return (
    <div className={styles.categoriesContainer}>
      <ul>
        {CategoriesData.map((item, index) => (
          <CategoryListItem key={index} categoryData={item} />
        ))}
      </ul>
    </div>
  );
};

export default HomeCategoryList;
