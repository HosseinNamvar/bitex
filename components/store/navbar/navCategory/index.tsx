import styles from "./navCategory.module.scss";
import { ListIcon } from "@/components/icons/svgIcons";

const NavBarCategory = () => {
  return (
    <div className={styles.category}>
      <ListIcon width={12} />
      <span>All Categories</span>
    </div>
  );
};

export default NavBarCategory;
