"use client";
import styles from "./addOption.module.scss";

import { useState } from "react";

import Button from "@/components/UI/button";
import { addOptionSet } from "@/actions/category/categoryOptions";
import { TOptionSet } from "@/types/common";

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

    const data: TOptionSet = {
      id: categoryOptionId,
      name,
      options: [],
      type: isColor ? "COLOR" : "TEXT",
    };

    setIsLoading(true);
    const result = await addOptionSet(data);
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
          disabled={isLoading}
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
      <Button
        text="Add Option"
        disabled={isLoading}
        onClick={() => handleAddOption()}
      />
    </div>
  );
};

export default AddOption;
