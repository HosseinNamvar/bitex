"use client";
import React, { useState } from "react";
import styles from "./navCategory.module.scss";
import { ListIcon } from "@/components/icons/svgIcons";
import { CategoriesData } from "@/data/categories";
import Link from "next/link";

const NavBarCategory = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleRemoveFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setMenuVisible(false);
    }
  };

  return (
    <div className={styles.category}>
      <button
        onClick={() => setMenuVisible(!menuVisible)}
        onBlur={handleRemoveFocus}
        className={`${menuVisible && styles.isActive}`}
      >
        <ListIcon width={12} />
        <span>All Categories</span>
      </button>
      <div className={`${styles.menu} ${menuVisible && styles.showMenu}`}>
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
