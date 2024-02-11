"use client";
import styles from "./catGroupRow.module.scss";

import { useState } from "react";
import Button from "@/components/UI/button";
import Popup from "@/components/UI/popup";
import { TAddCategory, TCategoryGroup } from "@/types/common";

import {
  deleteGroup,
  getOneGroup,
  updateGroup,
} from "@/actions/category/categoryGroup";

import CategoryOptions from "../categoryOptions";
import GroupCategory from "@/components/admin/forms/groupCategory";
import AddCategory from "@/components/admin/category/addCategory";
import { TAddCategoryAction, addCategory } from "@/actions/category/category";

interface IProps {
  name: string;
  catId: string;
  onReset: () => void;
}

let initialGroup: TCategoryGroup;

let initialCategory: TAddCategory = {
  name: "",
  url: "",
};

const CatGroupRow = ({ name, catId, onReset }: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [groupCategoryData, setGroupCategory] =
    useState<TCategoryGroup>(initialGroup);

  const [addCategoryData, setAddCategoryData] =
    useState<TAddCategory>(initialCategory);

  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const handleAddCategory = async () => {
    if (addCategoryData.name === "")
      setErrorMsg("Category Name should not be empty");
    if (addCategoryData.url === "") setErrorMsg("URL should not be empty");

    const data: TAddCategoryAction = {
      groupId: catId,
      ...addCategoryData,
    };
    setIsLoading(true);

    const add = await addCategory(data);

    if (add.error) setErrorMsg(add.error);
    if (add.res === "{}") {
      setErrorMsg("nothing added!");
      setIsLoading(false);
      return;
    }
    if (add.res) {
      setAddCategoryData({
        name: "",
        url: "",
      });
      setErrorMsg("");
      setIsLoading(false);
      setShowAddCategory(false);
      onReset();
    }
  };

  return (
    <div className={styles.catGroupRow}>
      <span>{name}</span>
      <div>
        <Button
          text="Options / Specifications"
          onClick={() => setShowOptions(true)}
        />
        <Button text="Add Category" onClick={() => setShowAddCategory(true)} />
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
      {showAddCategory && (
        <Popup
          content={
            <AddCategory
              data={addCategoryData}
              errorMsg={errorMsg}
              onChange={setAddCategoryData}
            />
          }
          width="360px"
          isLoading={isLoading}
          onCancel={() => setShowAddCategory(false)}
          onClose={() => setShowAddCategory(false)}
          onSubmit={() => handleAddCategory()}
          title="Add Category"
        />
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

export default CatGroupRow;
