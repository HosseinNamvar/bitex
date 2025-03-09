"use client";
import styles from "./categoryOptions.module.scss";

import { useEffect, useState } from "react";

import AddOption from "./AddOption";

// -------- ACTIONS --------
import {
  getOptionSetByCatID,
  getSpecGroupByCatID,
} from "@/actions/category/categoryOptions";
import { TOptionSet, TSpecGroup } from "@/types/common";
import OptionSet from "./optionSet";
import Button from "@/components/UI/button";
import AddSpecGroup from "./addSpecGroup";
import SpecGroup from "./specGroup";

interface IProps {
  categoryName: string;
  categoryID: string;
}

const CategoryOptions = ({ categoryName, categoryID }: IProps) => {
  const [isOption, setIsOption] = useState(true);
  const [optionSetList, setOptionSetList] = useState<TOptionSet[]>([]);
  const [specGroupList, setSpecGroupList] = useState<TSpecGroup[]>([]);

  const getCategoryOptionSet = async () => {
    if (categoryID) {
      const response = await getOptionSetByCatID(categoryID);
      if (response.res) {
        setOptionSetList(response.res);
      }
    }
  };

  const getCategorySpecGroup = async () => {
    if (categoryID) {
      const response = await getSpecGroupByCatID(categoryID);
      if (response.res) {
        setSpecGroupList(response.res);
      }
    }
  };

  useEffect(() => {
    const getOptionAndSpecs = async () => {
      if (categoryID) {
        const optionsResponse = await getOptionSetByCatID(categoryID);
        const specResponse = await getSpecGroupByCatID(categoryID);
        if (optionsResponse.res) {
          setOptionSetList(optionsResponse.res);
        }
        if (specResponse.res) {
          setSpecGroupList(specResponse.res);
        }
      }
    };
    getOptionAndSpecs();
  }, [categoryID]);

  const handleReloadOptions = async () => {
    getCategoryOptionSet();
  };
  const handleReloadSpecs = async () => {
    getCategorySpecGroup();
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
            reloadRequest={handleReloadOptions}
          />
          <div className={styles.optionList}>
            {optionSetList.length > 0 ? (
              <>
                {optionSetList.map((optionSet) => (
                  <OptionSet
                    key={optionSet.id}
                    data={optionSet}
                    reloadRequest={handleReloadOptions}
                  />
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
        <div className={styles.tabContainer}>
          <AddSpecGroup
            categorySpecGroupID={categoryID}
            reloadRequest={handleReloadSpecs}
          />
          <div className={styles.specGroupList}>
            {specGroupList.length > 0 ? (
              <>
                {specGroupList.map((specGroup) => (
                  <SpecGroup
                    key={specGroup.id}
                    data={specGroup}
                    reloadRequest={handleReloadSpecs}
                  />
                ))}
              </>
            ) : (
              <div className={styles.addCategoryOption}>
                <span>There is no Specification for this category</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryOptions;
