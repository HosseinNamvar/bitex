"use client";

import { useState } from "react";

import {
  addCategory,
  deleteCategory,
  updateCategory,
  TAddCategory,
  TGetAllCategories,
  TUpdateCategory,
} from "@/actions/category/category";
import Button from "@/components/UI/button";
import Popup from "@/components/UI/popup";

import AddCategory from "../addCategory";
import CategoryOptions from "../categoryOptions";

type TProps = {
  data: TGetAllCategories;
  subCategories: TGetAllCategories[];
  onReset: () => void;
};

const initialCategory: TAddCategory = {
  parentID: null,
  name: "",
  url: "",
  iconSize: [],
  iconUrl: null,
};

type TEditSubCat = {
  id: string;
  name: string;
  url: string;
};

let selectedSubCategory: TEditSubCat = {
  id: "",
  name: "",
  url: "",
};

const Category = ({ onReset, data, subCategories }: TProps) => {
  const { id: categoryID, name: categoryName, url: categoryUrl } = data;

  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showAddSubCategory, setShowAddSubCategory] = useState(false);

  // --------------- SUB CATEGORY ---------------
  const [showSubEdit, setShowSubEdit] = useState(false);
  const [showSubDelete, setShowSubDelete] = useState(false);

  const [showSubOptions, setShowSubOptions] = useState(false);

  const [addSubCategoryData, setAddSubCategoryData] = useState<TAddCategory>({
    ...initialCategory,
    parentID: categoryID,
  });
  const [editCategoryData, setEditCategoryData] = useState<TAddCategory>({
    ...data,
  });

  const [editSubCatData, setEditSubCatData] = useState<TAddCategory>({
    ...initialCategory,
  });

  const handleUpdate = async () => {
    if (editCategoryData.name === "" || editCategoryData.url === "") {
      setErrorMsg("Fields should not be an empty");
      return;
    }

    const updatedData: TUpdateCategory = { id: categoryID, iconSize: [] };

    if (editCategoryData.name !== categoryName) updatedData.name = editCategoryData.name;
    if (editCategoryData.url !== categoryUrl) updatedData.url = editCategoryData.url;

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
      setErrorMsg(response.error);
    }
  };

  const handleDeleteCat = async () => {
    setIsLoading(true);
    const response = await deleteCategory(categoryID);
    if (response.error) {
      setErrorMsg(response.error);
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setErrorMsg("");
      setShowDelete(false);
      setIsLoading(false);
      onReset();
    }
  };

  // --------------- SUB CATEGORY MANAGING SECTION ---------------
  const handleAddSub = async () => {
    if (addSubCategoryData.name === "") {
      setErrorMsg("Category Name should not be empty");
      return;
    }
    if (addSubCategoryData.url === "") {
      setErrorMsg("URL should not be empty");
      return;
    }

    const data: TAddCategory = {
      ...addSubCategoryData,
    };
    setIsLoading(true);

    const response = await addCategory(data);

    if (response.error) {
      setErrorMsg(response.error);
      setIsLoading(false);
    }
    if (response.res) {
      setAddSubCategoryData({
        ...addSubCategoryData,
        name: "",
        url: "",
      });
      setErrorMsg("");
      setIsLoading(false);
      setShowAddSubCategory(false);
      onReset();
    }
  };

  const handleShowEditSub = (data: TEditSubCat) => {
    const { name, url } = data;
    selectedSubCategory = { ...data };
    setEditSubCatData({ ...editSubCatData, name, url });
    setErrorMsg("");
    setShowSubEdit(true);
  };

  const handleEditSub = async () => {
    if (editSubCatData.name === "") {
      setErrorMsg("Category Name should not be empty");
      return;
    }
    if (editSubCatData.url === "") {
      setErrorMsg("URL should not be empty");
      return;
    }

    const updatedData: TUpdateCategory = {
      id: selectedSubCategory.id,
      iconSize: [],
    };
    if (editSubCatData.name !== selectedSubCategory.name) updatedData.name = editSubCatData.name;
    if (editSubCatData.url !== selectedSubCategory.url) updatedData.url = editSubCatData.url;

    if (!updatedData.url && !updatedData.name) {
      setShowSubEdit(false);
      setErrorMsg("");
      return;
    }

    setIsLoading(true);
    const response = await updateCategory(updatedData);
    if (!response.error) {
      setIsLoading(false);
      setErrorMsg("");
      setShowSubEdit(false);
      onReset();
    } else {
      setErrorMsg(response.error);
      setIsLoading(false);
    }
  };

  const handleShowDeleteSub = (id: string) => {
    selectedSubCategory = { id, name: "", url: "" };
    setErrorMsg("");
    setShowSubDelete(true);
  };

  const handleDeleteSubCat = async () => {
    setIsLoading(true);
    const response = await deleteCategory(selectedSubCategory.id);
    if (response.error) {
      setErrorMsg(response.error);
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setErrorMsg("");
      setIsLoading(false);
      setShowSubDelete(false);
      onReset();
    }
  };

  // --------------- OPTIONS SECTION ---------------
  const handleShowSubCatOptions = (data: TEditSubCat) => {
    selectedSubCategory = { ...data };
    setShowSubOptions(true);
  };

  return (
    <div className="flex flex-col border border-gray-200 mb-2 rounded-md [&:nth-child(2n-1)]:bg-gray-100">
      <div className="flex items-center justify-between p-2.5 pl-6">
        <span className="inline-block w-[200px] text-gray-800 text-sm">{categoryName}</span>
        <div className="flex">
          <Button className="ml-2" onClick={() => setShowOptions(true)}>
            Options
          </Button>
          <Button className="ml-2" onClick={() => setShowAddSubCategory(true)}>
            + Add Sub Category
          </Button>
        </div>
        <div className="flex">
          <Button className="ml-2" onClick={() => setShowEdit(true)}>
            Edit
          </Button>
          <Button className="ml-2" onClick={() => setShowDelete(true)}>
            Delete
          </Button>
        </div>
      </div>
      {!!subCategories?.length && (
        <div className="flex flex-col pt-2 border-t border-gray-300">
          {subCategories?.map((subCat) => (
            <div className="flex justify-between items-center mr-2 mb-2 ml-8" key={subCat.id}>
              <span className="inline-block w-[200px] text-gray-600 text-sm">{subCat.name}</span>
              <Button
                onClick={() =>
                  handleShowSubCatOptions({
                    id: subCat.id,
                    name: subCat.name,
                    url: "",
                  })
                }
              >
                Options
              </Button>
              <div className="flex gap-2">
                <Button
                  onClick={() =>
                    handleShowEditSub({
                      id: subCat.id,
                      name: subCat.name,
                      url: subCat.url,
                    })
                  }
                >
                  Edit
                </Button>
                <Button onClick={() => handleShowDeleteSub(subCat.id)}>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showEdit && (
        <Popup
          width="380px"
          content={<AddCategory errorMsg={errorMsg} onChange={setEditCategoryData} data={editCategoryData} />}
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
          content={<AddCategory errorMsg={errorMsg} onChange={setAddSubCategoryData} data={addSubCategoryData} />}
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
          content={
            <div className="w-full px-5 pt-5 pb-10 flex gap-4 flex-col items-center justify-center text-center">
              <span>Are you sure?</span>
              <span>{errorMsg}</span>
            </div>
          }
          isLoading={isLoading}
          onCancel={() => setShowDelete(false)}
          onClose={() => setShowDelete(false)}
          onSubmit={() => handleDeleteCat()}
        />
      )}

      {/* --------------- SUB CATEGORY SECTION --------------- */}
      {showSubEdit && (
        <Popup
          width="380px"
          content={<AddCategory errorMsg={errorMsg} onChange={setEditSubCatData} data={editSubCatData} />}
          isLoading={isLoading}
          onCancel={() => setShowSubEdit(false)}
          onClose={() => setShowSubEdit(false)}
          onSubmit={() => handleEditSub()}
          confirmBtnText="Save"
          title={`Edit Sub Category`}
        />
      )}

      {showSubDelete && (
        <Popup
          width="300px"
          content={
            <div className="w-full px-5 pt-5 pb-10 flex gap-4 flex-col items-center justify-center text-center">
              <span>Are you sure?</span>
              <span>{errorMsg}</span>
            </div>
          }
          isLoading={isLoading}
          onCancel={() => setShowSubDelete(false)}
          onClose={() => setShowSubDelete(false)}
          onSubmit={() => handleDeleteSubCat()}
        />
      )}
      {/* --------------- OPTIONS SECTION --------------- */}
      {showOptions && (
        <Popup
          content={<CategoryOptions categoryID={categoryID} categoryName={categoryName} />}
          isLoading={isLoading}
          onCancel={() => setShowOptions(false)}
          onClose={() => setShowOptions(false)}
          onSubmit={() => setShowOptions(false)}
        />
      )}
      {showSubOptions && (
        <Popup
          content={<CategoryOptions categoryID={selectedSubCategory.id} categoryName={selectedSubCategory.name} />}
          isLoading={isLoading}
          onCancel={() => setShowSubOptions(false)}
          onClose={() => setShowSubOptions(false)}
          onSubmit={() => setShowSubOptions(false)}
        />
      )}
    </div>
  );
};

export default Category;
