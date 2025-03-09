"use client";
import { useState } from "react";
import styles from "./checkBox.module.scss";
import { CheckIcon } from "@/components/icons/svgIcons";

interface IProps {
  text: string;
  isChecked: boolean;
  onClick: () => void;
}

const CheckBox = ({ text, isChecked, onClick }: IProps) => {
  return (
    <div
      className={`${styles.checkBox} ${isChecked ? styles.checked : ""}`}
      onClick={onClick}
    >
      <div className={styles.box}>
        <CheckIcon width={10} strokeWidth={1.5} />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default CheckBox;
