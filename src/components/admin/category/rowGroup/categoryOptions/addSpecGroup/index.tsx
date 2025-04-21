"use client";

import { useState } from "react";

import { addSpecGroup } from "@/actions/category/categoryOptions";
import Button from "@/shared/components/UI/button";
import Input from "@/shared/components/UI/input";
import { TSpecGroup } from "@/types/common";

type TProps = {
  categorySpecGroupID: string;
  reloadRequest: () => void;
};

const AddSpecGroup = ({ categorySpecGroupID, reloadRequest }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleAddOption = async () => {
    if (!title || title === "") return;

    const data: TSpecGroup = {
      id: categorySpecGroupID,
      specs: [],
      title,
    };

    setIsLoading(true);
    const result = await addSpecGroup(data);
    if (result.error) {
      setIsLoading(false);
      return;
    }
    if (result.res) {
      setTitle("");
      setIsLoading(false);
      reloadRequest();
    }
  };

  return (
    <div className="w-full flex items-center justify-between rounded-lg bg-gray-100 px-2 py-1.5 my-1.5 relative">
      <div className="flex items-center ml-2">
        <span className="mr-2">Title:</span>
        <Input type="text" onChange={(e) => setTitle(e.currentTarget.value)} value={title} disabled={isLoading} />
      </div>
      <Button disabled={isLoading} onClick={() => handleAddOption()}>
        Add Spec Group
      </Button>
    </div>
  );
};

export default AddSpecGroup;
