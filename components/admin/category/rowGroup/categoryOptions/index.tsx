"use client";
import styles from "./categoryOptions.module.scss";

import { useEffect, useState } from "react";

import Button from "@/components/UI/button";
import AddOption from "./AddOption";

// -------- ACTIONS --------
import { getOptionSetByCatID } from "@/actions/category/categoryOptions";
import { TOptionSet } from "@/types/common";
import OptionSet from "./optionSet";

interface IProps {
  categoryName: string;
  categoryID: string;
}

const CategoryOptions = ({ categoryName, categoryID }: IProps) => {
  const [isOption, setIsOption] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [optionSetList, setOptionSetList] = useState<TOptionSet[]>([]);

  const getCategoryOptionSet = async () => {
    if (categoryID) {
      const response = await getOptionSetByCatID(categoryID);
      if (response.res) {
        setOptionSetList(response.res);
      }
    }
  };

  useEffect(() => {
    getCategoryOptionSet();
  }, []);

  const handleAddOption = async () => {};
  const handleReloadData = async () => {
    getCategoryOptionSet();
  };

  return (
    <div className={styles.optionsWindow}>
      <div className={styles.header}>
        <h2>{categoryName}</h2>
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
          <AddOption
            categoryOptionId={categoryID}
            reloadRequest={handleReloadData}
          />
          <div className={styles.optionList}>
            {optionSetList.length > 0 ? (
              <>
                {optionSetList.map((optionSet) => (
                  <OptionSet key={optionSet.id} data={optionSet} />
                ))}
              </>
            ) : (
              <div className={styles.addCategoryOption}>
                <span>There is no Options for this category</span>
              </div>
            )}
          </div>
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
