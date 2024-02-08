"use client";
import { useState } from "react";
import styles from "./groupCategory.module.scss";
import { TCategoryGroup } from "@/actions/category/addCategory";

interface IProps {
  errorMsg: string;
  data: {
    name: string;
    url: string;
    iconUrl: string;
    iconSize: [number, number];
  };
  onChange: (data: TCategoryGroup) => void;
}

const GroupCategory = ({ errorMsg, data, onChange }: IProps) => {
  const [nameValue, setNameValue] = useState("");

  return (
    <div className={styles.groupCategoryForm}>
      <div className={styles.row}>
        <span className={styles.col1}>Category Group Name:</span>
        <input
          name="name"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.currentTarget.value })}
          type="text"
          placeholder="name..."
        />
      </div>
      <div className={styles.row}>
        <span className={styles.col1}>URL:</span>
        <input
          name="url"
          onChange={(e) => onChange({ ...data, url: e.currentTarget.value })}
          type="text"
          placeholder="URL..."
          value={data.url}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.col1}>ICON URL:</span>
        <input
          name="iconUrl"
          onChange={(e) =>
            onChange({ ...data, iconUrl: e.currentTarget.value })
          }
          type="text"
          placeholder="ICON URL..."
          value={data.iconUrl}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.col1}>ICON Size:</span>
        <input
          name="iconSize1"
          type="number"
          onChange={(e) =>
            onChange({
              ...data,
              iconSize: [parseInt(e.currentTarget.value), data.iconSize[1]],
            })
          }
          placeholder="0"
          value={data.iconSize[0]}
        />
        <input
          name="iconSize2"
          type="number"
          placeholder="0"
          onChange={(e) =>
            onChange({
              ...data,
              iconSize: [data.iconSize[0], parseInt(e.currentTarget.value)],
            })
          }
          value={data.iconSize[1]}
        />
      </div>
      {errorMsg !== "" && (
        <div className={styles.row}>
          <span className={styles.error}>{errorMsg}</span>
        </div>
      )}
    </div>
  );
};

export default GroupCategory;
