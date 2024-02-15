"use client";
import styles from "./addSpecGroup.module.scss";

import { useState } from "react";

import Button from "@/components/UI/button";
import { addOptionSet, addSpecGroup } from "@/actions/category/categoryOptions";
import { TSpecGroup } from "@/types/common";

interface IProps {
  categorySpecGroupID: string;
  reloadRequest: () => void;
}

const AddSpecGroup = ({ categorySpecGroupID, reloadRequest }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleAddOption = async () => {
    if (!title || title === "") return;

    const data: TSpecGroup = {
      id: categorySpecGroupID,
      specs: [],
      title,
    };

    setIsLoading(true);
    const result = await addSpecGroup(data);
    if (result.error) {
      setIsLoading(false);
      return;
    }
    if (result.res) {
      setTitle("");
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className={styles.addSpecGroup}>
      <div>
        <span>Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
          disabled={isLoading}
        />
      </div>
      <Button
        text="Add Spec Group"
        disabled={isLoading}
        onClick={() => handleAddOption()}
      />
    </div>
  );
};

export default AddSpecGroup;
