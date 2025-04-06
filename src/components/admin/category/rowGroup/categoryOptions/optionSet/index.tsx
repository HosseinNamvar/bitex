"use client";

import { useState } from "react";

import { addSingleOption, deleteOptionSet, deleteSingleOption } from "@/actions/category/categoryOptions";
import Button from "@/components/UI/button";
import Input from "@/components/UI/input";
import { TOptionSet, TSingleOption } from "@/types/common";

type TProps = {
  data: TOptionSet;
  reloadRequest: () => void;
};

const OptionSet = ({ data, reloadRequest }: TProps) => {
  const { id, name, options } = data;
  const [isLoading, setIsLoading] = useState(false);
  const [nameValuePair, setNameValuePair] = useState<[string, string]>(["", ""]);

  const handleDeleteOptionSet = async () => {
    if (!id) return;
    setIsLoading(true);
    const response = await deleteOptionSet(id);
    if (response.error) {
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setIsLoading(false);
      reloadRequest();
    }
  };

  const handleAddSingleOption = async () => {
    if (nameValuePair[0] === "" || nameValuePair[1] === "") return;

    const data: TSingleOption = {
      optionSetID: id,
      name: nameValuePair[0],
      value: nameValuePair[1],
    };

    setIsLoading(true);
    const response = await addSingleOption(data);
    if (response.error) {
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setIsLoading(false);
      setNameValuePair(["", ""]);
      reloadRequest();
    }
  };

  const handleDeleteSingleOption = async (data: TSingleOption) => {
    const { name, value, optionSetID } = data;
    if (!name || name === "" || !value || value === "" || !optionSetID || optionSetID === "") return;

    setIsLoading(true);
    const response = await deleteSingleOption(data);
    if (response.error) {
      setIsLoading(false);
      return;
    }
    if (response.res) {
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className="w-full grid grid-cols-2 justify-between rounded-[8px] p-3 border border-gray-300" key={id}>
      <div className="flex items-center gap-4 text-gray-700">
        <span>{name}</span>
        <Button disabled={isLoading} onClick={() => handleDeleteOptionSet()}>
          delete
        </Button>
      </div>
      <div className="flex flex-col">
        {options.map((singleOption, index) => (
          <div
            className="flex items-center justify-between p-1 rounded-md transition-colors duration-300 select-none"
            key={index}
          >
            <div className="ml-2">
              <span className="w-[100px] text-center mr-2">{singleOption.name}</span>
              <span className="w-[100px] text-center mr-2"> -- </span>
              <span className="w-[100px] text-center mr-2">{singleOption.value}</span>
            </div>
            <div className="ml-2">
              <Button
                onClick={() =>
                  handleDeleteSingleOption({
                    name: singleOption.name,
                    value: singleOption.value,
                    optionSetID: id,
                  })
                }
              >
                delete
              </Button>
            </div>
          </div>
        ))}
        <div className="pt-3 mt-3 border-t border-gray-200">
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              value={nameValuePair[0]}
              onChange={(e) => setNameValuePair([e.currentTarget.value, nameValuePair[1]])}
            />
            <Input
              type="text"
              value={nameValuePair[1]}
              onChange={(e) => setNameValuePair([nameValuePair[0], e.currentTarget.value])}
            />
          </div>
          <Button className="w-full" disabled={isLoading} onClick={() => handleAddSingleOption()}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OptionSet;
