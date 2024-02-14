"use client";
import styles from "./addOption.module.scss";

import { useEffect, useState } from "react";

import Button from "@/components/UI/button";
import {
  TActivateOptions,
  addOption,
  addTextOption,
  getOptions,
} from "@/actions/category/categoryOptions";

interface IProps {
  categoryOptionId: string;
  reloadRequest: () => void;
}

const AddOption = ({ categoryOptionId, reloadRequest }: IProps) => {
  const [isColor, setIsColor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  const handleAddOption = async () => {
    if (!name || name === "") return;

    const type = isColor ? "COLOR" : "TEXT";

    setIsLoading(true);
    const result = await addOption({
      categoryOptionId,
      name,
      type,
    });
    if (result.error) {
      setIsLoading(false);
      return;
    }
    if (result.res) {
      setName("");
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className={styles.addOption}>
      <div>
        <span>Name:</span>
        <input
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
        />
      </div>
      <div>
        <span>type:</span>
        <option disabled={!isColor} onClick={() => setIsColor(false)}>
          Text
        </option>
        <option disabled={isColor} onClick={() => setIsColor(true)}>
          Color
        </option>
      </div>
      <Button text="Add Option" onClick={() => handleAddOption()} />
      {isLoading && <div className={styles.loading} />}
    </div>
  );
};

export default AddOption;
