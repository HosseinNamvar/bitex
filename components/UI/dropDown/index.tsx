"use client";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import styles from "./dropDown.module.scss";

import { TDropDown } from "@/types/uiElements";
import { useRef } from "react";
import { ArrowIcon } from "@/components/icons/svgIcons";

interface IProps {
  data: TDropDown[];
  width?: string;
  selectedIndex?: number;
  isSearch?: boolean;
  disabled?: boolean;
  onChange: (newIndex: number) => void;
}

const DropDownList = ({
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
      {data.length > 0 ? (
        <>
          <span>{data[selectedIndex].text}</span>
          <ArrowIcon width={8} />
          <div
            className={`${styles.list} ${isActive ? styles.showOptions : ""}`}
          >
            <div className={styles.container}>
              {data.map((option, index) => (
                <span
                  className={
                    index === selectedIndex ? styles.selectedOption : ""
                  }
                  key={option.value}
                  onClick={() => handleChange(index)}
                >
                  {option.text}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <span>---</span>
          <ArrowIcon width={8} />
        </>
      )}
    </button>
  );
};

export default DropDownList;
