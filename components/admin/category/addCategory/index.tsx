"use client";
import { ElementRef, useRef, useState } from "react";
import styles from "./addCategory.module.scss";
import Button from "@/components/UI/button";
import { addGroup } from "@/actions/category/categoryGroup";
import Popup from "@/components/UI/popup";
import GroupCategory from "../../forms/groupCategory";
import { TCategoryGroup } from "@/types/common";

type ShowMenu = {
  showWindow: boolean;
  windowTypeID: number;
};

interface IProps {
  onReset: () => void;
}

const AddCategory = ({ onReset }: IProps) => {
  const [showWindow, setShowWindow] = useState<ShowMenu>({
    showWindow: false,
    windowTypeID: 0,
  });
  const defaultGroupData: TCategoryGroup = {
    id: "",
    name: "",
    url: "",
    iconSize: [10, 10],
    iconUrl: "",
  };
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [groupCategoryData, setGroupCategory] =
    useState<TCategoryGroup>(defaultGroupData);

  const windowContent: React.ReactNode[] = [
    <GroupCategory
      errorMsg={errorMsg}
      data={groupCategoryData}
      onChange={setGroupCategory}
      key={1}
    />,
    <div className={styles.addCategory} key={2}>
      <div className={styles.header}>Add new category</div>
    </div>,
    <div className={styles.addSubCategory} key={3}>
      <div className={styles.header}>Add new sub category</div>
    </div>,
  ];

  const groupNameRef = useRef<ElementRef<"form">>(null);

  const handleAddGroup = async () => {
    const { name, url, iconUrl, iconSize } = groupCategoryData;
    if (name === "") {
      setErrorMsg("Name is empty!");
      return;
    }
    if (iconSize[0] === 0 || iconSize[1] === 0) {
      setErrorMsg("Icon Size is empty!");
      return;
    }
    if (iconUrl === "") {
      setErrorMsg("Icon Url is empty!");
      return;
    }
    if (url === "") {
      setErrorMsg("URL is empty!");
      return;
    }

    setButtonDisabled(true);
    const res = await addGroup(groupCategoryData);
    if (res) {
      setGroupCategory(defaultGroupData);
      setButtonDisabled(false);
      setErrorMsg("");
      setShowWindow({ showWindow: false, windowTypeID: 0 });
      onReset();
    } else {
      setButtonDisabled(false);
      setErrorMsg("Can't Insert it to Database!");
    }
  };

  return (
    <div className={styles.addCategory}>
      <Button
        onClick={() => setShowWindow({ showWindow: true, windowTypeID: 0 })}
        text="Add Group"
      />
      <Button
        onClick={() => setShowWindow({ showWindow: true, windowTypeID: 1 })}
        text="Add Category"
      />
      <Button
        onClick={() => setShowWindow({ showWindow: true, windowTypeID: 2 })}
        text="Add Sub Category"
      />
      {showWindow.showWindow && (
        <Popup
          content={windowContent[showWindow.windowTypeID]}
          isLoading={buttonDisabled}
          onCancel={() => setShowWindow({ showWindow: false, windowTypeID: 0 })}
          onClose={() => setShowWindow({ showWindow: false, windowTypeID: 0 })}
          onSubmit={() => handleAddGroup()}
          title="Add Category Group"
        />
      )}
    </div>
  );
};

export default AddCategory;
