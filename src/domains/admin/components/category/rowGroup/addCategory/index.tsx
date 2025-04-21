"use client";
import { TAddCategory } from "@/actions/category/category";
import Input from "@/shared/components/UI/input";

type TProps = {
  errorMsg: string;
  data: TAddCategory;
  onChange: (data: TAddCategory) => void;
};

const AddCategory = ({ data, errorMsg, onChange }: TProps) => {
  return (
    <div className="grid grid-cols-7 gap-y-3 items-center my-3 mx-4">
      <span className="col-span-3">Category Name:</span>
      <Input
        className="col-span-4"
        name="name"
        value={data.name}
        onChange={(e) => onChange({ ...data, name: e.currentTarget.value })}
        type="text"
        placeholder="name..."
      />
      <span className="col-span-3">URL:</span>
      <Input
        className="col-span-4"
        name="url"
        onChange={(e) => onChange({ ...data, url: e.currentTarget.value })}
        type="text"
        placeholder="URL..."
        value={data.url}
      />

      {errorMsg !== "" && (
        <div className="col-span-7">
          <span className="text-bitex-red-500">{errorMsg}</span>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
