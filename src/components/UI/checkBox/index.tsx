"use client";
import { CheckIcon } from "@/components/icons/svgIcons";
import { cn } from "@/shared/utils/styling";

type TProps = {
  text: string;
  isChecked: boolean;
  onClick: () => void;
};

const CheckBox = ({ text, isChecked, onClick }: TProps) => {
  return (
    <div
      className={cn("flex items-center gap-2 cursor-pointer transition-all duration-400", {
        "hover:[&>div]:border-gray-900": isChecked,
      })}
      onClick={onClick}
    >
      <div
        className={cn(
          "size-5 rounded-[3px] flex items-center justify-center border border-gray-400 transition-all duration-500",
          { "bg-bitex-blue-500 border-bitex-blue-500": isChecked }
        )}
      >
        <CheckIcon
          width={10}
          strokeWidth={1.5}
          className={cn("fill-none stroke-white opacity-0 transition-opacity duration-400", {
            "opacity-100": isChecked,
          })}
        />
      </div>
      <span
        className={cn("text-gray-700 select-none text-sm transition-colors duration-500", {
          "text-gray-900": isChecked,
        })}
      >
        {text}
      </span>
    </div>
  );
};

export default CheckBox;
