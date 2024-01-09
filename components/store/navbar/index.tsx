import Image from "next/image";
import styles from "./navbar.module.scss";

import NavBarProfile from "./navProfile";
import NavBarFavorite from "./navFavorite";
import NavBarShopping from "./navShopping";
import NavBarCategory from "./navCategory";

const StoreNavBar = () => {
  return (
    <nav className={styles.Header}>
      <section>
        <Image alt="Bitex Logo" src={"/images/logo.png"} fill />
        <div className={styles.search}>
          <input type="text" />
        </div>
        <NavBarProfile />
        <NavBarFavorite />
        <NavBarShopping />
      </section>
      <section className={styles.HH}>
        <div className="left">
          <NavBarCategory />
          <ul>
            <li>PC</li>
            <li>Laptop</li>
            <li>Mobile</li>
            <li>TV</li>
            <li>Gaming</li>
            <li>Camera</li>
            <li>Tablet</li>
            <li>Watch</li>
          </ul>
        </div>
        <div className="right"></div>
      </section>
    </nav>
  );
};

export default StoreNavBar;
