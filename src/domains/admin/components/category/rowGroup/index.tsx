"use client";

import { useState } from "react";

import {
  addCategory,
  updateCategory,
  deleteCategory,
  TGetAllCategories,
  TAddCategory,
  TUpdateCategory,
} from "@/actions/category/category";
import GroupCategory from "@/domains/admin/components/forms/groupCategory";
import Button from "@/shared/components/UI/button";
import Popup from "@/shared/components/UI/popup";

import AddCategory from "./addCategory";
import Category from "./category";
import CategoryOptions from "./categoryOptions";

type TProps = {
  data: TGetAllCategories;
  categories: TGetAllCategories[];
  onReset: () => void;
};

const initialCategory: TAddCategory = {
  name: "",
  url: "",
  parentID: null,
  iconSize: [],
  iconUrl: null,
};

const RowCatGroup = ({ data, categories, onReset }: TProps) => {
  const { id: groupId, name } = data;
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [groupCategoryData, setGroupCategoryData] = useState<TGetAllCategories>(data);
  const [addCategoryData, setAddCategoryData] = useState<TAddCategory>(initialCategory);

  // ---------------------- FUNCTIONS ----------------------
  const handleUpdateGroup = async () => {
    const updatedData: TUpdateCategory = { id: groupId, iconSize: [10, 10] };

    if (groupCategoryData.name !== data.name) {
      updatedData.name = groupCategoryData.name;
    }

    if (groupCategoryData.url !== data.url) {
      updatedData.url = groupCategoryData.url;
    }

    if (groupCategoryData.iconUrl && groupCategoryData.iconUrl !== data.iconUrl) {
      updatedData.iconUrl = groupCategoryData.iconUrl;
    }

    if (groupCategoryData.iconSize && data.iconSize) {
      if (groupCategoryData.iconSize.toString() !== data.iconSize.toString())
        updatedData.iconSize = [...groupCategoryData.iconSize];
    }
    setIsLoading(true);
    const response = await updateCategory(updatedData);
    if (!response.error) {
      setShowEdit(false);
      setIsLoading(false);
      setErrorMsg("");
      onReset();
    } else {
      setIsLoading(false);
      setErrorMsg(response.error);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const response = await deleteCategory(groupId);
    if (response.error) {
      setErrorMsg(response.error);
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setErrorMsg("");
      setIsLoading(false);
      setShowDelete(false);
      onReset();
    }
  };

  const handleAddCategory = async () => {
    if (addCategoryData.name === "") {
      setErrorMsg("Category Name should not be empty");
      return;
    }
    if (addCategoryData.url === "") {
      setErrorMsg("URL should not be empty");
      return;
    }

    const data: TAddCategory = {
      parentID: groupId,
      iconSize: [],
      iconUrl: null,
      name: addCategoryData.name,
      url: addCategoryData.url,
    };
    setIsLoading(true);

    const result = await addCategory(data);

    if (result.error) {
      setIsLoading(false);
      setErrorMsg(result.error);
    }
    if (result.res) {
      setAddCategoryData({
        ...initialCategory,
      });
      setErrorMsg("");
      setIsLoading(false);
      setShowAddCategory(false);
      onReset();
    }
  };

  return (
    <div className="flex flex-wrap text-sm justify-between p-3 pl-5 items-center">
      <span className="inline-block w-[200px] text-gray-700 text-sm">{name}</span>
      <div className="flex gap-2">
        <Button size="md" onClick={() => setShowOptions(true)}>
          Options / Specifications
        </Button>
        <Button size="md" onClick={() => setShowAddCategory(true)}>
          Add Category
        </Button>
      </div>
      <div className="flex gap-2">
        <Button size="md" onClick={() => setShowEdit(true)}>
          Edit
        </Button>
        <Button size="md" onClick={() => setShowDelete(true)}>
          Delete
        </Button>
      </div>
      {!!categories.length && (
        <div className="min-w-full flex flex-col mt-3">
          {categories?.map(
            (cat) =>
              cat.parentID === data.id && (
                <Category
                  data={cat}
                  key={cat.id}
                  subCategories={categories.filter((c) => c.parentID === cat.id)}
                  onReset={onReset}
                />
              )
          )}
        </div>
      )}
      {showOptions && (
        <Popup
          content={<CategoryOptions categoryID={groupId} categoryName={name} />}
          isLoading={false}
          onClose={() => setShowOptions(false)}
          onCancel={() => setShowOptions(false)}
          onSubmit={() => setShowOptions(false)}
          title=""
        />
      )}
      {showAddCategory && (
        <Popup
          content={<AddCategory data={addCategoryData} errorMsg={errorMsg} onChange={setAddCategoryData} />}
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
          content={<GroupCategory errorMsg={errorMsg} data={groupCategoryData} onChange={setGroupCategoryData} />}
          isLoading={isLoading}
          onCancel={() => setShowEdit(false)}
          onClose={() => setShowEdit(false)}
          onSubmit={() => handleUpdateGroup()}
          title={`Updating Group: ${data.name}`}
        />
      )}
      {showDelete && (
        <Popup
          content={
            <div className="w-full px-5 pt-5 pb-10 flex gap-4 flex-col items-center justify-center text-center">
              <span>Are you sure?</span>
              <span>{errorMsg}</span>
            </div>
          }
          isLoading={isLoading}
          width="400px"
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={() => handleDelete()}
        />
      )}
    </div>
  );
};

export default RowCatGroup;
