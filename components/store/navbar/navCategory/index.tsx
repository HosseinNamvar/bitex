"use-client";
import styles from "./navCategory.module.scss";

import { useRef } from "react";
import Link from "next/link";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import { ListIcon } from "@/components/icons/svgIcons";
import { CategoriesData } from "@/data/categories";

interface IProps {
  isNavbarVisible: boolean;
}

const NavBarCategory = ({ isNavbarVisible: isNavbarHide }: IProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleMenu(false, dropdownRef);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

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
