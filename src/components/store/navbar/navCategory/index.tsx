"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { getAllCategoriesJSON } from "@/actions/category/category";
import { ListIcon } from "@/components/icons/svgIcons";
import Button from "@/components/UI/button";
import { useToggleMenu } from "@/shared/hooks/useToggleMenu";
import { cn } from "@/shared/utils/styling";
import { TGroupJSON } from "@/types/categories";

type TProps = {
  isNavbarVisible: boolean;
};

const NavBarCategory = ({ isNavbarVisible: isNavbarHide }: TProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleMenu(false, dropdownRef);
  const [categories, setCategories] = useState<TGroupJSON[]>([]);

  const toggleMenu = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
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
    <div className="relative flex items-center select-none">
      <Button
        onClick={toggleMenu}
        className={cn(
          "w-auto px-4 py-2 border rounded-md transition-all duration-300",
          isActive
            ? "border-gray-200 bg-gray-100"
            : "border-white bg-white hover:border-gray-200 hover:bg-gray-100 active:border-gray-300 active:bg-gray-200"
        )}
      >
        <ListIcon width={12} className="fill-gray-600" />
        <span className="text-sm">All Categories</span>
      </Button>
      <div
        ref={dropdownRef}
        className={cn(
          "absolute left-0 top-10 w-64 rounded-lg border border-gray-300 bg-white/90 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 transform",
          isActive ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        )}
      >
        {categories.map((item, index) => (
          <Link
            key={index}
            href={`/list/${item.group.url}`}
            className="block px-4 py-3 text-gray-600 text-sm transition-all duration-300 hover:pl-5 hover:bg-gray-100"
          >
            {item.group.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBarCategory;
