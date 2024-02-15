"use client";
import styles from "./specGroup.module.scss";

import { useState } from "react";
import Button from "@/components/UI/button";
import { TSpecGroup } from "@/types/common";
import { deleteSpecGroup } from "@/actions/category/categoryOptions";

interface IProps {
  data: TSpecGroup;
  reloadRequest: () => void;
}

const SpecGroup = ({ data, reloadRequest }: IProps) => {
  const { id, title, specs } = data;
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteSpecGroup = async () => {
    if (!id) return;
    setIsLoading(true);
    const response = await deleteSpecGroup(id);
    if (response.error) {
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className={styles.specGroup}>
      <div className={styles.header}>
        <div>
          <span>{title}</span>
          <Button
            disabled={isLoading}
            text="delete"
            onClick={() => handleDeleteSpecGroup()}
          />
        </div>
        <div>
          <input disabled={isLoading} type="text" />
          <Button disabled={isLoading} text="Add Spec" onClick={() => ""} />
        </div>
      </div>
      <div className={styles.specRow}>
        <span>Dimension</span>
        <Button disabled={isLoading} text="delete" onClick={() => ""} />
      </div>
      <div className={styles.specRow}>
        <span>SimCard</span>
        <Button disabled={isLoading} text="delete" onClick={() => ""} />
      </div>
    </div>
  );
};

export default SpecGroup;
