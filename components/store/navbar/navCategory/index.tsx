import Image from "next/image";
import styles from "./navCategory.module.scss";

const NavBarCategory = () => {
  return (
    <div className={styles.category}>
      <Image
        src={"/images/icons/listIcon.svg"}
        width={12}
        height={12}
        alt="categories"
      />
      <span>All Categories</span>
    </div>
  );
};

export default NavBarCategory;
