"use client";

import { TGetAllCategories } from "@/actions/category/category";
import Input from "@/shared/components/UI/input";

type TProps = {
  errorMsg: string;
  data: TGetAllCategories;
  onChange: (data: TGetAllCategories) => void;
};

const GroupCategory = ({ errorMsg, data, onChange }: TProps) => {
  const iconSize: number[] = data.iconSize ? [...data.iconSize] : [];

  return (
    <div className="grid grid-cols-3 text-gray-500 gap-y-4 items-center my-6 mx-4 text-sm">
      <span>Category Group Name:</span>
      <Input
        className="col-span-2 w-[200px]"
        name="name"
        value={data.name}
        onChange={(e) => onChange({ ...data, name: e.currentTarget.value })}
        type="text"
        placeholder="name..."
      />
      <span>URL:</span>
      <Input
        className="col-span-2 w-[200px]"
        name="url"
        onChange={(e) => onChange({ ...data, url: e.currentTarget.value })}
        type="text"
        placeholder="URL..."
        value={data.url}
      />
      <span>ICON URL:</span>
      <Input
        className="col-span-2 w-[200px]"
        name="iconUrl"
        onChange={(e) => onChange({ ...data, iconUrl: e.currentTarget.value })}
        type="text"
        placeholder="ICON URL..."
        value={data.iconUrl || ""}
      />
      <span>ICON Size:</span>
      <div className="col-span-2 flex gap-2">
        {data.iconSize && (
          <>
            <Input
              name="iconSize1"
              type="number"
              onChange={(e) =>
                onChange({
                  ...data,
                  iconSize: [parseInt(e.currentTarget.value) | 0, iconSize[1]],
                })
              }
              placeholder="0"
              value={data.iconSize[0]}
            />
            <Input
              name="iconSize2"
              type="number"
              placeholder="0"
              onChange={(e) =>
                onChange({
                  ...data,
                  iconSize: [iconSize[0], parseInt(e.currentTarget.value) | 0],
                })
              }
              value={data.iconSize[1]}
            />
          </>
        )}
      </div>
      {errorMsg !== "" && <span className="col-span-3 text-bitex-red-500">{errorMsg}</span>}
    </div>
  );
};

export default GroupCategory;
