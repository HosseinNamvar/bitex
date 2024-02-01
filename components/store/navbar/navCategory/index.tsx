"use client";
import React, { useRef } from "react";
import styles from "./navCategory.module.scss";
import { ListIcon } from "@/components/icons/svgIcons";
import { CategoriesData } from "@/data/categories";
import Link from "next/link";
import { useToggleMenu } from "@/hooks/useToggleMenu";

const NavBarCategory = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleMenu(false, dropdownRef);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <div className={styles.category}>
      <button onClick={toggleMenu} className={`${isActive && styles.isActive}`}>
        <ListIcon width={12} />
        <span>All Categories</span>
      </button>
      <div
        ref={dropdownRef}
        className={`${styles.menu} ${isActive && styles.showMenu}`}
      >
        {CategoriesData.map((item, index) => (
          <Link key={index} href={item.url}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBarCategory;
