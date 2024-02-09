"use client";
import { useState } from "react";
import styles from "./catRow.module.scss";
import Button from "@/components/UI/button";
import CategoryOptions from "../categoryOptions";
import Popup from "@/components/UI/popup";
import GroupCategory from "@/components/admin/forms/groupCategory";

import { TCategoryGroup } from "@/types/common";
import { getOneGroup } from "@/actions/category/categoryGroupServices";

interface IProps {
  name: string;
  catId: string;
  type: "group" | "category" | "subCategory";
}

const initialGroup: TCategoryGroup = {
  id: "",
  name: "",
  url: "",
  iconSize: [10, 10],
  iconUrl: "",
};

const CatRow = ({ name, type, catId }: IProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [groupCategoryData, setGroupCategory] =
    useState<TCategoryGroup>(initialGroup);

  const handleUpdate = () => {};

  const handleEditButton = async () => {
    const foundGroup = await getOneGroup(catId);

    if (foundGroup.res) {
      setGroupCategory(foundGroup.res);
      setShowEdit(true);
    }
  };

  const handleDelete = () => {};
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
        <Button text="Delete" onClick={handleDelete} />
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
    </div>
  );
};

export default CatRow;
