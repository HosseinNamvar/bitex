"use client";
import styles from "./optionSet.module.scss";

import { TOptionSet } from "@/types/common";
import Button from "@/components/UI/button";
import { useState } from "react";
import { deleteOptionSet } from "@/actions/category/categoryOptions";

interface IProps {
  data: TOptionSet;
  reloadRequest: () => void;
}

const OptionSet = ({ data, reloadRequest }: IProps) => {
  const { id, name, options, type } = data;
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteOptionSet = async () => {
    if (!id) return;
    setIsLoading(true);
    const response = await deleteOptionSet(id);
    if (response.error) {
      setIsLoading(false);
      console.log(response.error);
      return;
    }
    if (response.res) {
      console.log(response.res);
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className={styles.optionSet} key={id}>
      <div className={styles.col1}>
        <span>{name}</span>
        <Button
          text="delete"
          disabled={isLoading}
          onClick={() => handleDeleteOptionSet()}
        />
      </div>
      <div className={styles.col2}>
        {options.map((singleOption, index) => (
          <div className={styles.colorRow} key={index}>
            <div>
              <span>{singleOption.name}</span>
              <span>{singleOption.value}</span>
            </div>
            <div>
              <Button text="delete" onClick={() => "delete"} />
            </div>
          </div>
        ))}
        <div className={styles.colorAdd}>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <Button text="Add" onClick={() => "Add"} />
        </div>
      </div>
    </div>
  );
};

export default OptionSet;
