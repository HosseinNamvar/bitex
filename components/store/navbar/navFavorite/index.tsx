import Image from "next/image";
import styles from "./navFavorite.module.scss";

const NavBarFavorite = () => {
  return (
    <div className={styles.favorite}>
      <Image
        src={"/images/icons/heartIcon.svg"}
        alt="Favorites"
        width={22}
        height={19}
      />
      <span style={{ backgroundColor: "#d9d9d9" }}>0</span>
    </div>
  );
};

export default NavBarFavorite;
