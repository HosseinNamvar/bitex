"use client";
import styles from "./categoryRow.module.scss";

import { useState } from "react";

import Button from "@/components/UI/button";

interface IProps {
  name: string;
  catId: string;
  onReset: () => void;
}

const CategoryRow = ({ catId, name, onReset }: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAddSubCategory, setShowAddSubCategory] = useState(false);

  const showEditWindow = async () => {
    setShowEdit(true);
  };

  return (
    <div className={styles.categoryRow}>
      <span>{name}</span>
      <div>
        <Button
          text="Options / Specifications"
          onClick={() => setShowOptions(true)}
        />
        <Button
          text="Add Sub Category"
          onClick={() => setShowAddSubCategory(true)}
        />
      </div>
      <div>
        <Button text="Edit" onClick={showEditWindow} />
        <Button text="Delete" onClick={() => setShowDelete(true)} />
      </div>
    </div>
  );
};

export default CategoryRow;
