"use client";
import styles from "./specGroup.module.scss";

import Button from "@/components/UI/button";
import { TSpecGroup } from "@/types/common";

interface IProps {
  data: TSpecGroup;
  reloadRequest: () => void;
}

const SpecGroup = ({ data, reloadRequest }: IProps) => {
  const { id, title, specs } = data;
  return (
    <div className={styles.specGroup}>
      <div className={styles.header}>
        <div>
          <span>{title}</span>
          <Button text="delete" onClick={() => ""} />
        </div>
        <div>
          <input type="text" />
          <Button text="Add" onClick={() => ""} />
        </div>
      </div>
      <div className={styles.specRow}>
        <span>Dimension</span>
        <Button text="delete" onClick={() => ""} />
      </div>
      <div className={styles.specRow}>
        <span>SimCard</span>
        <Button text="delete" onClick={() => ""} />
      </div>
    </div>
  );
};

export default SpecGroup;
