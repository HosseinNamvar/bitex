"use client";
import styles from "./categoryRow.module.scss";

import { useEffect, useState } from "react";

import Button from "@/components/UI/button";
import Popup from "@/components/UI/popup";
import AddCategory from "../addCategory";
import { TAddCategory } from "@/types/common";
import {
  TUpdateCategoryAction,
  updateCategory,
} from "@/actions/category/category";

interface IProps {
  name: string;
  url: string;
  catId: string;

  onReset: () => void;
}

let initialCategory: TAddCategory = {
  name: "",
  url: "",
};

const CategoryRow = ({ catId, name, url, onReset }: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showAddSubCategory, setShowAddSubCategory] = useState(false);
  const [categoryData, setCategoryData] = useState<TAddCategory>({ name, url });

  useEffect(() => {
    initialCategory.name = name;
    initialCategory.url = url;
  }, [name, url]);

  const showEditWindow = async () => {
    setCategoryData({ name, url });
    setErrorMsg("");
    setShowEdit(true);
  };

  const handleUpdate = async () => {
    if (categoryData.name === "" || categoryData.url === "") {
      setErrorMsg("Fields should not be an empty");
      return;
    }

    let updatedData: TUpdateCategoryAction = { catId };

    if (categoryData.name !== initialCategory.name)
      updatedData.name = categoryData.name;
    if (categoryData.url !== initialCategory.url)
      updatedData.url = categoryData.url;

    if (!updatedData.url && !updatedData.name) {
      setShowEdit(false);
      setErrorMsg("");
      return;
    }

    setIsLoading(true);
    const response = await updateCategory(updatedData);
    if (!response.error) {
      setShowEdit(false);
      setIsLoading(false);
      setErrorMsg("");
      onReset();
    } else {
      setErrorMsg(JSON.stringify(response.error));
    }
  };

  const handleAddSub = async () => {};
  return (
    <div className={styles.categoryRow}>
      <span>{name}</span>
      <div>
        <Button text="Options" onClick={() => setShowOptions(true)} />
        <Button
          text="+ Add Sub Category"
          onClick={() => setShowAddSubCategory(true)}
        />
      </div>
      <div>
        <Button text="Edit" onClick={showEditWindow} />
        <Button text="Delete" onClick={() => setShowDelete(true)} />
      </div>
      {showEdit && (
        <Popup
          width="380px"
          content={
            <AddCategory
              errorMsg={errorMsg}
              onChange={setCategoryData}
              data={categoryData}
            />
          }
          isLoading={isLoading}
          onCancel={() => setShowEdit(false)}
          onClose={() => setShowEdit(false)}
          onSubmit={() => handleUpdate()}
          confirmBtnText="Save"
          title="Update Category"
        />
      )}
      {showAddSubCategory && (
        <Popup
          width="380px"
          content={
            <AddCategory
              errorMsg={errorMsg}
              onChange={setCategoryData}
              data={categoryData}
            />
          }
          isLoading={isLoading}
          onCancel={() => setShowAddSubCategory(false)}
          onClose={() => setShowAddSubCategory(false)}
          onSubmit={() => handleAddSub()}
          confirmBtnText="ADD"
          title="Add Sub Category"
        />
      )}
    </div>
  );
};

export default CategoryRow;
