"use client";
import { useState } from "react";
import styles from "./catRow.module.scss";
import Button from "@/components/UI/button";
import CategoryOptions from "../categoryOptions";

interface IProps {
  text: string;
}

const CatRow = ({ text }: IProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <div className={styles.catRow}>
      <span>{text}</span>
      <div>
        <Button
          text="Options / Specifications"
          onClick={() => setShowOptions(true)}
        />
      </div>
      <div>
        <Button text="Edit" onClick={handleEdit} />
        <Button text="Delete" onClick={handleDelete} />
      </div>
      {showOptions ? (
        <CategoryOptions onClose={() => setShowOptions(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CatRow;
