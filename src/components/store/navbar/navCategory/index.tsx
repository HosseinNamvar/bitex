"use client";
import styles from "./navCategory.module.scss";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import { ListIcon } from "@/components/icons/svgIcons";
import { getAllCategoriesJSON } from "@/actions/category/category";
import { TGroupJSON } from "@/types/categories";

interface IProps {
  isNavbarVisible: boolean;
}

const NavBarCategory = ({ isNavbarVisible: isNavbarHide }: IProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleMenu(false, dropdownRef);
  const [categories, setCategories] = useState<TGroupJSON[]>([]);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  useEffect(() => {
    const getCategoriesDB = async () => {
      const result = await getAllCategoriesJSON();
      if (result.res) {
        setCategories(result.res);
      }
    };
    getCategoriesDB();
  }, []);

  if (!isNavbarHide && isActive) setIsActive(false);

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
        {categories.map((item, index) => (
          <Link key={index} href={"/list/" + item.group.url}>
            {item.group.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBarCategory;
