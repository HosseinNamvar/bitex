"use client";
import { TDropDown } from "@/types/uiElements";
import styles from "./lineList.module.scss";

interface IProps {
  data: TDropDown;
  selectedId: number;
  onChange: (newxIndex: number) => void;
}

const LineList = ({ data, selectedId, onChange }: IProps) => {
  const handleChange = (newIndex: number) => {
    onChange(newIndex);
  };

  return (
    <div className={styles.lineList}>
      {data.options.map((item, index) => (
        <button
          key={index}
          className={selectedId === index ? styles.active : ""}
          onClick={() => handleChange(index)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

export default LineList;
