"use client";
import { ElementRef, useRef, useState } from "react";
import styles from "./addCategory.module.scss";
import Button from "@/components/UI/button";
import { addGroup, TCategoryGroup } from "@/actions/category/addCategory";

type ShowMenu = {
  showWindow: boolean;
  windowType: "group" | "category" | "subCategory";
};

const AddCategory = () => {
  const [showWindow, setShowWindow] = useState<ShowMenu>({
    showWindow: false,
    windowType: "group",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const groupNameRef = useRef<ElementRef<"form">>(null);

  const handleAddGroup = async (formData: FormData) => {
    const name = formData.get("name")?.toString() || "";
    const iconSize: [number, number] = [
      parseInt(formData.get("iconSize1")?.toString() || "") || 0,
      parseInt(formData.get("iconSize2")?.toString() || "") || 0,
    ];
    const iconUrl = formData.get("iconUrl")?.toString() || "";
    const url = formData.get("url")?.toString() || "";

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

    const data: TCategoryGroup = {
      name,
      iconSize,
      iconUrl,
      url,
    };
    setButtonDisabled(true);
    const res = await addGroup(data);
    if (res) {
      setShowWindow({ showWindow: false, windowType: "group" });
    } else {
      setErrorMsg("There is a problem!");
    }
  };

  return (
    <div className={styles.addCategory}>
      <Button
        onClick={() => setShowWindow({ showWindow: true, windowType: "group" })}
        text="Add Group"
      />
      <Button
        onClick={() =>
          setShowWindow({ showWindow: true, windowType: "category" })
        }
        text="Add Category"
      />
      <Button
        onClick={() =>
          setShowWindow({ showWindow: true, windowType: "subCategory" })
        }
        text="Add Sub Category"
      />
      {showWindow.showWindow && (
        <div className={styles.popup}>
          <div
            className={styles.background}
            onClick={() =>
              setShowWindow({ showWindow: false, windowType: "category" })
            }
          />
          <div className={styles.window}>
            {/* ------------- ADD GROUP SECTION ------------- */}
            {showWindow.windowType === "group" && (
              <div>
                <div className={styles.header}>Add new category group</div>
                <form
                  action={handleAddGroup}
                  className={styles.addGroup}
                  ref={groupNameRef}
                >
                  <div className={styles.row}>
                    <span className={styles.col1}>Category Group Name:</span>
                    <input name="name" type="text" placeholder="name..." />
                  </div>
                  <div className={styles.row}>
                    <span className={styles.col1}>URL:</span>
                    <input name="url" type="text" placeholder="URL..." />
                  </div>
                  <div className={styles.row}>
                    <span className={styles.col1}>ICON URL:</span>
                    <input
                      name="iconUrl"
                      type="text"
                      placeholder="ICON URL..."
                    />
                  </div>
                  <div className={styles.row}>
                    <span className={styles.col1}>ICON Size:</span>
                    <input name="iconSize1" type="number" placeholder="0" />
                    <input name="iconSize2" type="number" placeholder="0" />
                  </div>
                  {errorMsg !== "" && (
                    <div className={styles.row}>
                      <span className={styles.error}>{errorMsg}</span>
                    </div>
                  )}
                  <div className={styles.windowControl}>
                    <Button
                      text="cancel"
                      onClick={() =>
                        setShowWindow({
                          showWindow: false,
                          windowType: "group",
                        })
                      }
                    />
                    <Button
                      type="submit"
                      text="Add Group"
                      disabled={buttonDisabled}
                    />
                  </div>
                </form>
              </div>
            )}

            {/* ------------- ADD CATEGORY SECTION ------------- */}
            {showWindow.windowType === "category" && (
              <div>
                <div className={styles.header}>Add new category</div>
              </div>
            )}

            {/* ------------- ADD SUBCATEGORY SECTION ------------- */}
            {showWindow.windowType === "subCategory" && (
              <div>
                <div className={styles.header}>Add new sub category</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
