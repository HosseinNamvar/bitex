"use client";
import styles from "./categoryRow.module.scss";

import { useEffect, useState } from "react";

import Button from "@/components/UI/button";
import Popup from "@/components/UI/popup";
import AddCategory from "../addCategory";
import { TAddCategory } from "@/types/common";
import {
  TAddCategoryAction,
  TUpdateCategoryAction,
  addSubCategory,
  deleteCategory,
  updateCategory,
  updateSubCategory,
} from "@/actions/category/category";

type TSubCat = {
  id: string;
  name: string;
  url: string;
};

interface IProps {
  name: string;
  url: string;
  catId: string;
  subCategories?: TSubCat[];
  onReset: () => void;
}

let initialCategory: TAddCategory = {
  name: "",
  url: "",
};

let initialSubCategory: TSubCat = {
  id: "",
  name: "",
  url: "",
};

const CategoryRow = ({ catId, name, url, subCategories, onReset }: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showAddSubCategory, setShowAddSubCategory] = useState(false);
  const [categoryData, setCategoryData] = useState<TAddCategory>({ name, url });
  const [subCategoryData, setSubCategoryData] = useState<TAddCategory>({
    name: "",
    url: "",
  });

  // --------------- SUB CATEGORY ---------------
  const [showSubEdit, setShowSubEdit] = useState(false);
  const [showSubDelete, setShowSubDelete] = useState(false);
  const [subCatData, setSubCatData] = useState<TAddCategory>({
    name: "",
    url: "",
  });

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

  const handleDeleteCat = async () => {
    setIsLoading(true);
    const response = await deleteCategory(catId);
    if (response.res) {
      setShowDelete(false);
      onReset();
    }
    setIsLoading(false);
  };

  // --------------- SUB CATEGORY MANAGING SECTION ---------------
  const handleAddSub = async () => {
    if (subCategoryData.name === "")
      setErrorMsg("Category Name should not be empty");
    if (subCategoryData.url === "") setErrorMsg("URL should not be empty");

    const data: TAddCategoryAction = {
      groupId: catId,
      ...subCategoryData,
    };
    setIsLoading(true);

    const response = await addSubCategory(data);

    if (response.error) {
      setErrorMsg(response.error);
      setIsLoading(false);
    }
    if (response.res === "{}") {
      setErrorMsg("nothing added!");
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setSubCategoryData({
        name: "",
        url: "",
      });
      setErrorMsg("");
      setIsLoading(false);
      setShowAddSubCategory(false);
      onReset();
    }
  };

  const handleShowEditSub = (data: TAddCategory & { id: string }) => {
    initialSubCategory = { ...data };
    setSubCatData({ name: data.name, url: data.url });
    setErrorMsg("");
    setShowSubEdit(true);
  };

  const handleEditSub = async () => {
    if (subCatData.name === "") {
      setErrorMsg("Category Name should not be empty");
      return;
    }
    if (subCatData.url === "") {
      setErrorMsg("URL should not be empty");
      return;
    }

    let updatedData: TUpdateCategoryAction = { catId: initialSubCategory.id };
    if (subCatData.name !== initialSubCategory.name)
      updatedData.name = subCatData.name;
    if (subCatData.url !== initialSubCategory.url)
      updatedData.url = subCatData.url;

    if (!updatedData.url && !updatedData.name) {
      setShowSubEdit(false);
      setErrorMsg("");
      return;
    }

    setIsLoading(true);
    console.log(updatedData);
    const response = await updateSubCategory(updatedData);
    if (!response.error) {
      setIsLoading(false);
      setErrorMsg("");
      setShowSubEdit(false);
      onReset();
    } else {
      setErrorMsg(JSON.stringify(response.error));
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.categoryRow}>
      <div className={styles.parentRow}>
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
      </div>
      {subCategories !== undefined && subCategories?.length > 0 && (
        <div className={styles.childRows}>
          {subCategories?.map((subCat) => (
            <div className={styles.row} key={subCat.id}>
              <span>{subCat.name}</span>
              <div>
                <Button text="Options" onClick={() => setShowOptions(true)} />
              </div>
              <div>
                <Button
                  text="Edit"
                  onClick={() =>
                    handleShowEditSub({
                      id: subCat.id,
                      name: subCat.name,
                      url: subCat.url,
                    })
                  }
                />
                <Button text="Delete" onClick={() => setShowDelete(true)} />
              </div>
            </div>
          ))}
        </div>
      )}
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
              onChange={setSubCategoryData}
              data={subCategoryData}
            />
          }
          isLoading={isLoading}
          onCancel={() => setShowAddSubCategory(false)}
          onClose={() => setShowAddSubCategory(false)}
          onSubmit={() => handleAddSub()}
          confirmBtnText="ADD"
          title={`Add Sub Category to: -- ${name}`}
        />
      )}

      {showDelete && (
        <Popup
          width="300px"
          content={<div className={styles.deleteText}>Are you sure?</div>}
          isLoading={isLoading}
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={() => handleDeleteCat()}
        />
      )}

      {showSubEdit && (
        <Popup
          width="380px"
          content={
            <AddCategory
              errorMsg={errorMsg}
              onChange={setSubCatData}
              data={subCatData}
            />
          }
          isLoading={isLoading}
          onCancel={() => setShowSubEdit(false)}
          onClose={() => setShowSubEdit(false)}
          onSubmit={() => handleEditSub()}
          confirmBtnText="Save"
          title={`Edit Sub Category`}
        />
      )}
    </div>
  );
};

export default CategoryRow;
