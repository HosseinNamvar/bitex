"use client";

import { useState } from "react";

import { addOptionSet } from "@/actions/category/categoryOptions";
import Button from "@/shared/components/UI/button";
import Input from "@/shared/components/UI/input";
import { TOptionSet } from "@/shared/types/common";

type TProps = {
  categoryOptionId: string;
  reloadRequest: () => void;
};

const AddOption = ({ categoryOptionId, reloadRequest }: TProps) => {
  const [isColor, setIsColor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  const handleAddOption = async () => {
    if (!name || name === "") return;

    const data: TOptionSet = {
      id: categoryOptionId,
      name,
      options: [],
      type: isColor ? "COLOR" : "TEXT",
    };

    setIsLoading(true);
    const result = await addOptionSet(data);
    if (result.error) {
      setIsLoading(false);
      return;
    }
    if (result.res) {
      setName("");
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className="w-full flex items-center justify-between rounded-[8px] bg-gray-100 p-1.5 my-[6px] relative">
      <div className="flex items-center">
        <span className="mx-2">Name:</span>
        <Input type="text" onChange={(e) => setName(e.currentTarget.value)} value={name} disabled={isLoading} />
      </div>
      <div className="flex items-center">
        <span className="mr-2">type:</span>
        <option
          className="cursor-pointer rounded-md select-none px-4 py-1.5 transition-all duration-300 mr-1 bg-white border border-gray-300 hover:bg-gray-200 disabled:cursor-default disabled:text-white disabled:bg-blue-500"
          disabled={!isColor}
          onClick={() => setIsColor(false)}
        >
          Text
        </option>
        <option
          className="cursor-pointer rounded-md select-none px-4 py-1.5 transition-all duration-300 mr-1 bg-white border border-gray-300 hover:bg-gray-200 disabled:cursor-default disabled:text-white disabled:bg-blue-500"
          disabled={isColor}
          onClick={() => setIsColor(true)}
        >
          Color
        </option>
      </div>
      <Button className="w-[160px]" disabled={isLoading} onClick={() => handleAddOption()}>
        Add Option
      </Button>
    </div>
  );
};

export default AddOption;
