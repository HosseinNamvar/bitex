import styles from "./homeCategoryList.module.scss";
import CategoryListItem from "./_components/catListItem";

const HomeCategoryList = () => {
  return (
    <div className={styles.categoriesContainer}>
      <ul>
        <CategoryListItem
          name="Computer & Laptop"
          image="computerIcon"
          dimension={[17, 15]}
          hasSub
        />
        <CategoryListItem
          name="Tablets & iPad"
          image="tabletIcon"
          dimension={[18, 14]}
        />
        <CategoryListItem
          name="Printer & Cameras"
          image="printerIcon"
          dimension={[15, 14]}
        />
        <CategoryListItem
          name="Smart Phones "
          image="phoneIcon"
          dimension={[12, 18]}
        />
        <CategoryListItem
          name="OLED Smart TVs"
          image="tvIcon"
          dimension={[17, 13]}
        />
        <CategoryListItem
          name="Keyboard & Mouse"
          image="mouseIcon"
          dimension={[12, 17]}
        />
        <CategoryListItem
          name="Video Games"
          image="gameIcon"
          dimension={[18, 11]}
        />
        <CategoryListItem
          name="Sports & Outdoors"
          image="healthIcon"
          dimension={[13, 11]}
        />
        <CategoryListItem
          name="Smart Watches"
          image="watchIcon"
          dimension={[10, 16]}
        />
        <CategoryListItem
          name="All Categories"
          image="otherCatIcon"
          dimension={[14, 14]}
          isLast
        />
      </ul>
    </div>
  );
};

export default HomeCategoryList;
