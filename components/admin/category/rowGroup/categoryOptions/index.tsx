"use client";
import styles from "./categoryOptions.module.scss";

import { useEffect, useState } from "react";

import Button from "@/components/UI/button";
import AddOption from "./AddOption";

// -------- ACTIONS --------
import {
  TActivateOptions,
  TGetCategoryOption,
  activateCategoryOptions,
  getCategoryOptions,
} from "@/actions/category/categoryOptions";

interface IProps {
  name: string;
  categoryData: TActivateOptions;
}

const CategoryOptions = ({ categoryData, name }: IProps) => {
  const { parentCatId, type } = categoryData;
  const [isOption, setIsOption] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [options, setOptions] = useState<TGetCategoryOption | null>(null);

  const getCategoryOption = async () => {
    if (parentCatId) {
      const response = await getCategoryOptions(parentCatId);
      if (response.res) {
        setOptions(response.res);
      }
    }
  };
  useEffect(() => {
    getCategoryOption();
  }, []);

  const handleActivateOptions = async () => {
    if (parentCatId && type) {
      const data: TActivateOptions = {
        parentCatId,
        type,
      };
      setIsLoading(true);
      const response = await activateCategoryOptions(data);
      if (response?.error) {
        setIsLoading(false);
        setErrorMsg(response?.error);
      } else if (response?.res) {
        setIsLoading(false);
      }
    } else {
      setErrorMsg("Invalid Data!");
    }
  };

  const handleAddOption = async () => {};
  const handleReloadData = async () => {};
  return (
    <div className={styles.optionsWindow}>
      <div className={styles.header}>
        <h2>{`${name} - (${categoryData.type})`}</h2>
        <div>
          <h3
            className={isOption ? styles.active : ""}
            onClick={() => setIsOption(true)}
          >
            Options
          </h3>
          <h3
            className={!isOption ? styles.active : ""}
            onClick={() => setIsOption(false)}
          >
            Specifications
          </h3>
        </div>
      </div>

      {isOption ? (
        // ------------------ OPTIONS SECTION ------------------
        <div className={styles.tabContainer}>
          {options ? (
            <>
              <AddOption
                categoryOptionId={options.id}
                reloadRequest={handleReloadData}
              />
              {options.id}
              {/* {options} */}
              {/* <div className={styles.optionRow}>
                <div className={styles.col1}>Storage Capacity</div>
                <div className={styles.col2}>
                  <div className={styles.textRow}>
                    <span>128GB</span>
                    <div>
                      <Button text="edit" onClick={() => ("edit")} />
                      <Button
                        text="delete"
                        onClick={() => ("delete")}
                      />
                    </div>
                  </div>
                  <div className={styles.textRow}>
                    <span>256GB</span>
                    <div>
                      <Button text="edit" onClick={() => ("edit")} />
                      <Button
                        text="delete"
                        onClick={() => ("delete")}
                      />
                    </div>
                  </div>
                  <div className={styles.textAdd}>
                    <input type="text" />
                    <Button text="Add" onClick={() => ("Add")} />
                  </div>
                </div>
              </div>
              <div className={styles.optionRow}>
                <div className={styles.col1}>Color</div>
                <div className={styles.col2}>
                  <div className={styles.colorRow}>
                    <div>
                      <span>Red</span>
                      <span>#000000</span>
                    </div>
                    <div>
                      <Button text="edit" onClick={() => ("edit")} />
                      <Button
                        text="delete"
                        onClick={() => ("delete")}
                      />
                    </div>
                  </div>
                  <div className={styles.colorRow}>
                    <div>
                      <span>Blue</span>
                      <span>#000000</span>
                    </div>{" "}
                    <div>
                      <Button text="edit" onClick={() => ("edit")} />
                      <Button
                        text="delete"
                        onClick={() => ("delete")}
                      />
                    </div>
                  </div>
                  <div className={styles.colorAdd}>
                    <div>
                      <input type="text" />
                      <input type="text" />
                    </div>
                    <Button text="Add" onClick={() => ("Add")} />
                  </div>
                </div>
              </div> */}
            </>
          ) : (
            <div className={styles.addCategoryOption}>
              <span>Options are not activated for this category</span>
              <span>{errorMsg}</span>
              <Button
                text="Activate Options"
                disabled={isLoading}
                onClick={() => handleActivateOptions()}
              />
            </div>
          )}
        </div>
      ) : (
        // ------------------ SPECIFICATION SECTION ------------------
        // <div className={styles.tabContainer}>
        //   <div className={styles.specGroup}>
        //     <div className={styles.specTitle}>
        //       <span>Overall</span>
        //       <div>
        //         <Button text="edit" onClick={() => ("")} />
        //         <Button text="edit" onClick={() => ("")} />
        //       </div>
        //     </div>
        //     <div className={styles.specRow}>
        //       <span>Dimension</span>
        //       <div>
        //         <Button text="edit" onClick={() => ("")} />
        //         <Button text="edit" onClick={() => ("")} />
        //       </div>
        //     </div>
        //     <div className={styles.specRow}>
        //       <span>SimCard</span>
        //       <div>
        //         <Button text="edit" onClick={() => ("")} />
        //         <Button text="delete" onClick={() => ("")} />
        //       </div>
        //     </div>
        //     <div className={styles.specAdd}>
        //       <input type="text" />
        //       <Button text="Add" onClick={() => ("")} />
        //     </div>
        //   </div>
        //   <div className={styles.specGroupAdd}>
        //     <div>
        //       <span>Add Group:</span>
        //       <input type="text" />
        //     </div>
        //     <Button text="Add" onClick={() => ("")} />
        //   </div>
        // </div>
        ""
      )}
    </div>
  );
};

export default CategoryOptions;
