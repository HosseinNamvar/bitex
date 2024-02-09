"use client";
import styles from "./catRow.module.scss";

import { useState } from "react";
import Button from "@/components/UI/button";
import Popup from "@/components/UI/popup";
import { TCategoryGroup } from "@/types/common";

import {
  deleteGroup,
  getOneGroup,
  updateGroup,
} from "@/actions/category/categoryGroup";

import CategoryOptions from "../categoryOptions";
import GroupCategory from "@/components/admin/forms/groupCategory";

interface IProps {
  name: string;
  catId: string;
  onReset: () => void;
  type: "group" | "category" | "subCategory";
}

let initialGroup: TCategoryGroup;

const CatRow = ({ name, type, catId, onReset }: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [groupCategoryData, setGroupCategory] =
    useState<TCategoryGroup>(initialGroup);

  const handleUpdate = async () => {
    let updatedData: TCategoryGroup = { id: catId };

    const keys = ["name", "url", "iconUrl"] as const;
    for (let i = 0; i < keys.length; i++) {
      if (groupCategoryData[keys[i]] !== initialGroup[keys[i]]) {
        updatedData[keys[i]] = groupCategoryData[keys[i]];
      }
    }

    if (groupCategoryData.iconSize && initialGroup.iconSize) {
      if (
        groupCategoryData.iconSize.toString() !==
        initialGroup.iconSize.toString()
      )
        updatedData.iconSize = [...groupCategoryData.iconSize];
    }

    const response = await updateGroup(updatedData);
    if (!response.error) {
      setShowEdit(false);
      onReset();
    } else {
      setErrorMsg(JSON.stringify(response.error));
    }
  };

  const handleEditButton = async () => {
    const foundGroup = await getOneGroup(catId);

    if (foundGroup.res) {
      const { ...values } = foundGroup.res;
      initialGroup = values;
      setGroupCategory(foundGroup.res);
      setShowEdit(true);
    }
  };

  const handleDelete = async () => {
    const deleteItem = await deleteGroup(catId);
    if (deleteItem.res) {
      setShowDelete(false);
      onReset();
    }
  };

  return (
    <div className={styles.catRow}>
      <span>{name}</span>
      <div>
        <Button
          text="Options / Specifications"
          onClick={() => setShowOptions(true)}
        />
      </div>
      <div>
        <Button text="Edit" onClick={handleEditButton} />
        <Button text="Delete" onClick={() => setShowDelete(true)} />
      </div>
      {showOptions ? (
        <CategoryOptions onClose={() => setShowOptions(false)} />
      ) : (
        ""
      )}
      {showEdit && (
        <Popup
          content={
            <GroupCategory
              errorMsg={errorMsg}
              data={groupCategoryData}
              onChange={setGroupCategory}
            />
          }
          isLoading={false}
          onCancel={() => setShowEdit(false)}
          onClose={() => setShowEdit(false)}
          onSubmit={() => handleUpdate()}
          title="Edit the Category Group"
        />
      )}
      {showDelete && (
        <Popup
          content={<div className={styles.deleteText}>Are you sure?</div>}
          isLoading={false}
          width="400px"
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={() => handleDelete()}
        />
      )}
    </div>
  );
};

export default CatRow;
