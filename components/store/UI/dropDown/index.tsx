"use client";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import styles from "./dropDown.module.scss";

import { TDropDown } from "@/types/uiElements";
import { useRef } from "react";
import { ArrowIcon } from "@/components/icons/svgIcons";

interface IProps {
  data: TDropDown;
  width?: string;
  selectedIndex?: number;
  isSearch?: boolean;
  disabled?: boolean;
  onChange: (newxIndex: number) => void;
}

const DropDownList = ({
  isSearch = false,
  disabled = false,
  data,
  width = "auto",
  selectedIndex = 0,
  onChange,
}: IProps) => {
  const optionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleMenu(false, optionRef);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  const handleChange = (newIndex: number) => {
    onChange(newIndex);
  };

  return (
    <button
      onClick={toggleMenu}
      className={`${styles.dropDownList} ${isActive ? styles.isFocus : ""}`}
      style={{ width: width }}
    >
      <span>{data.options[selectedIndex].text}</span>
      <ArrowIcon width={8} />
      <div className={`${styles.list} ${isActive ? styles.showOptions : ""}`}>
        {data.options.map((option, index) => (
          <span
            className={index === selectedIndex ? styles.selectedOption : ""}
            key={option.value}
            onClick={() => handleChange(index)}
          >
            {option.text}
          </span>
        ))}
      </div>
    </button>
  );
};

export default DropDownList;
