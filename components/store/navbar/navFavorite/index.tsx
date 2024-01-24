import styles from "./navFavorite.module.scss";
import { HeartIcon } from "@/components/icons/svgIcons";

const NavBarFavorite = () => {
  return (
    <div className={styles.favorite}>
      <HeartIcon width={20} />
      <span style={{ backgroundColor: "#d9d9d9" }}>0</span>
    </div>
  );
};

export default NavBarFavorite;
