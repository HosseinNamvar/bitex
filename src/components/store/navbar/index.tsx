"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.scss";

import NavBarProfile from "./navProfile";
import NavBarFavorite from "./navFavorite";
import NavBarShopping from "./navShopping";
import NavBarCategory from "./navCategory";
import { useEffect, useState } from "react";
import AddVisit from "../common/addVisit";

const StoreNavBar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    let prevPositionY = 0;
    if (typeof window !== "undefined") prevPositionY = window.scrollY;
    const handleScroll = () => {
      //---handle auto hiding navbar
      if (typeof window !== "undefined") {
        prevPositionY < window.scrollY && window.scrollY > 100
          ? setHideNavbar(true)
          : setHideNavbar(false);
        prevPositionY = window.scrollY;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
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
              quality={100}
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
            <NavBarShopping />
          </div>
        </div>
      </section>
      <section>
        <div className={`storeContainer ${styles.ribbon}`}>
          <div className={styles.left}>
            <NavBarCategory isNavbarVisible={!hideNavbar} />
            <hr />
            <ul className={styles.topCategories}>
              <li>
                <Link href={"/list/pc-laptops/computer"}>Computer</Link>
              </li>
              <li>
                <Link href={"/list/pc-laptops/laptops"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/list/smartphones"}>Mobile</Link>
              </li>
              <li>
                <Link href={"/list/tvs"}>TV</Link>
              </li>
              <li>
                <Link href={"/list/video-games"}>Gaming</Link>
              </li>
              <li>
                <Link href={"/list/photography/cameras"}>Camera</Link>
              </li>
              <li>
                <Link href={"/list/tablets"}>Tablet</Link>
              </li>
              <li>
                <Link href={"/list/watches"}>Watch</Link>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul>
              <li className={styles.pcConfig}>
                <Link href={""}>PC Configuration</Link>
              </li>
              <li className={styles.deal}>
                <Link href={""}>
                  <Image
                    src={"/images/icons/discountIcon.svg"}
                    alt="Top Deals"
                    width={18}
                    height={18}
                  />
                  Top Deals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <AddVisit />
    </nav>
  );
};

export default StoreNavBar;
