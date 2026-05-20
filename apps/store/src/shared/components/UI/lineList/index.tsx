"use client";
import { TDropDown } from "@/shared/types/uiElements";
import { cn } from "@/shared/utils/styling";

type TProps = {
  data: TDropDown[];
  selectedId: number;
  onChange: (newIndex: number) => void;
};

const LineList = ({ data, selectedId, onChange }: TProps) => {
  const handleChange = (newIndex: number) => {
    onChange(newIndex);
  };

  return (
    <div className="w-full flex gap-2 items-center h-8">
      {data.map((item, index) => (
        <button
          key={index}
          className={cn(
            "inline-block text-sm transition-colors duration-300 px-4 py-1 rounded-full",
            selectedId === index
              ? "text-white cursor-default font-medium bg-gray-900 hover:bg-gray-900"
              : "cursor-pointer text-gray-500 hover:bg-gray-200"
          )}
          onClick={() => handleChange(index)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

export default LineList;
