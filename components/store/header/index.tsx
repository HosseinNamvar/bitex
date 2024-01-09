import Image from "next/image";
import styles from "./header.module.scss";

import HeaderProfile from "./headerProfile";
import HeaderFav from "./headerFav";
import HeaderShopping from "./headerShopping";
import HeaderCategory from "./headerCategory";

const StoreHeader = () => {
  return (
    <header className={styles.Header}>
      <section>
        <Image alt="Bitex Logo" src={"/images/logo.png"} fill />
        <div className={styles.search}>
          <input type="text" />
        </div>
        <HeaderProfile />
        <HeaderFav />
        <HeaderShopping />
      </section>
      <section className={styles.HH}>
        <div className="left">
          <HeaderCategory />
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
    </header>
  );
};

export default StoreHeader;
