"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";

import NavBarProfile from "./navProfile";
import NavBarFavorite from "./navFavorite";
import NavBarShopping from "./navShopping";
import NavBarCategory from "./navCategory";
import { useEffect, useState } from "react";

const StoreNavBar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  let prevPositionY = window.scrollY;

  const handleScroll = () => {
    //---handle auto hiding navbar
    prevPositionY < window.scrollY && window.scrollY > 100
      ? setHideNavbar(true)
      : setHideNavbar(false);
    prevPositionY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${hideNavbar && styles.hideNavbar}`}>
      <section>
        <div className={`${styles.top} storeContainer`}>
          <Link href={"/"}>
            <Image
              alt="Bitex Logo"
              src={"/images/logo.png"}
              width={125}
              height={40}
            />
          </Link>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search"
            />
            <Image
              src={"/images/icons/searchIcon.svg"}
              width={16}
              height={16}
              alt="Search"
            />
          </div>
          <div className={styles.rightButtons}>
            <NavBarProfile />
            <NavBarFavorite />
            <NavBarShopping quantity={0} />
          </div>
        </div>
      </section>
      <section>
        <div className={`storeContainer ${styles.ribbon}`}>
          <div className={styles.left}>
            <NavBarCategory />
            <hr />
            <ul className={styles.topCategories}>
              <li>
                <Link href={""}>PC</Link>
              </li>
              <li>
                <Link href={""}>Laptop</Link>
              </li>
              <li>
                <Link href={""}>Mobile</Link>
              </li>
              <li>
                <Link href={""}>TV</Link>
              </li>
              <li>
                <Link href={""}>Gaming</Link>
              </li>
              <li>
                <Link href={""}>Camera</Link>
              </li>
              <li>
                <Link href={""}>Tablet</Link>
              </li>
              <li>
                <Link href={""}>Watch</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul>
              <li className={styles.pcConfig}>
                <Link href={""}>PC Configuration</Link>
              </li>
              <li className={styles.deal}>
                <Image
                  src={"/images/icons/discountIcon.svg"}
                  alt="Top Deals"
                  width={18}
                  height={18}
                />
                <Link href={""}>Top Deals</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default StoreNavBar;
