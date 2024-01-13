import Image from "next/image";
import styles from "./navShopping.module.scss";

const NavBarShopping = () => {
  return (
    <div className={styles.shopping}>
      <Image
        src={"/images/icons/shoppingIcon.svg"}
        alt="Shopping"
        width={24}
        height={24}
      />
      <span style={{ backgroundColor: "#E12828", color: "white" }}>4</span>
    </div>
  );
};

export default NavBarShopping;
