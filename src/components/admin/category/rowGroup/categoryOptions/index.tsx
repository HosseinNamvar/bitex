"use client";

import { useEffect, useState } from "react";

import AddOption from "./AddOption";

// -------- ACTIONS --------
import { getOptionSetByCatID, getSpecGroupByCatID } from "@/actions/category/categoryOptions";
import { TOptionSet, TSpecGroup } from "@/types/common";
import OptionSet from "./optionSet";
import AddSpecGroup from "./addSpecGroup";
import SpecGroup from "./specGroup";
import { cn } from "@/shared/utils/styling";

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
    <div className="relative flex h-[500px] flex-col bg-white z-10 text-sm">
      <div className="flex items-center justify-between text-gray-800">
        <h2 className="flex-grow text-base h-full pt-1.5 border-b border-gray-300">{categoryName}</h2>
        <div className="flex text-sm">
          <h3
            className={cn(
              " rounded-t-md px-4 py-3 transition-colors duration-300 border-b",
              isOption
                ? "cursor-default text-gray-900 border-b-2 border-blue-500 hover:bg-white"
                : "cursor-pointer text-gray-500 border-gray-300 hover:bg-gray-100"
            )}
            onClick={() => setIsOption(true)}
          >
            Options
          </h3>
          <h3
            className={cn(
              "rounded-t-md px-4 py-3 transition-colors duration-300 border-b",
              !isOption
                ? "cursor-default text-gray-900 border-b-2 border-blue-500 hover:bg-white"
                : "cursor-pointer text-gray-500 border-gray-300 hover:bg-gray-100"
            )}
            onClick={() => setIsOption(false)}
          >
            Specifications
          </h3>
        </div>
      </div>

      {isOption ? (
        // ------------------ OPTIONS SECTION ------------------
        <div className="flex flex-col h-full overflow-hidden">
          <AddOption categoryOptionId={categoryID} reloadRequest={handleReloadOptions} />
          <div className="flex flex-col gap-4 h-full overflow-y-scroll p-3">
            {!!optionSetList.length ? (
              <>
                {optionSetList.map((optionSet) => (
                  <OptionSet key={optionSet.id} data={optionSet} reloadRequest={handleReloadOptions} />
                ))}
              </>
            ) : (
              <div className="mt-10 flex flex-col items-center justify-center">
                <span className="text-center mb-[30px] w-[300px]">There is no Options for this category</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        // ------------------ SPECIFICATION SECTION ------------------
        <div className="flex flex-col h-full overflow-hidden">
          <AddSpecGroup categorySpecGroupID={categoryID} reloadRequest={handleReloadSpecs} />
          <div className="flex flex-col gap-4 h-full overflow-y-scroll p-3">
            {specGroupList.length > 0 ? (
              <>
                {specGroupList.map((specGroup) => (
                  <SpecGroup key={specGroup.id} data={specGroup} reloadRequest={handleReloadSpecs} />
                ))}
              </>
            ) : (
              <div className="mt-10 flex flex-col items-center justify-center">
                <span className="text-center mb-[30px] w-[300px]">There is no Specification for this category</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryOptions;
