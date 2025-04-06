"use client";

import { useRef } from "react";

import { ArrowIcon } from "@/components/icons/svgIcons";
import { useToggleMenu } from "@/hooks/useToggleMenu";
import { cn } from "@/shared/utils/styling";
import { TDropDown } from "@/types/uiElements";

type TProps = {
  data: TDropDown[];
  width?: string;
  selectedIndex?: number;
  isSearch?: boolean;
  disabled?: boolean;
  onChange: (newIndex: number) => void;
};

const DropDownList = ({ data, width = "auto", selectedIndex = 0, onChange }: TProps) => {
  const optionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useToggleMenu(false, optionRef);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  const handleChange = (newIndex: number) => {
    onChange(newIndex);
  };

  return (
    <button
      onClick={toggleMenu}
      className={
        "relative cursor-pointer flex justify-between items-center gap-8 px-4 py-1.5 rounded-md border border-gray-200 transition-all duration-400 hover:bg-gray-100 active:bg-gray-200"
      }
      style={{ width: width }}
    >
      {data.length ? (
        <>
          <span className="text-sm text-gray-500">{data[selectedIndex].text}</span>
          <div
            className={cn(
              "size-4 flex items-center justify-center origin-center transition-all duration-400 ease-out",
              isActive ? "-rotate-90" : "rotate-90"
            )}
          >
            <ArrowIcon width={8} className={cn("fill-none", isActive ? "stroke-gray-500" : "stroke-gray-400")} />
          </div>
          <div
            className={cn(
              "w-full absolute top-9 right-0 rounded-md overflow-hidden border border-gray-300 bg-white shadow-[0_0_6px_rgba(0,0,0,0.1)] scale-[0.97] invisible opacity-0 transition-all duration-300 p-1 z-10 origin-top",
              { "scale-100 visible opacity-100": isActive }
            )}
          >
            <div className="h-auto max-h-[250px] overflow-y-auto flex flex-col">
              {data.map((option, index) => (
                <span
                  className={cn(
                    "block mb-0.5 px-4 py-2 text-sm text-left text-gray-500 rounded-sm transition-colors duration-300 last:mb-0",
                    index === selectedIndex ? "bg-gray-200/75" : "hover:bg-gray-100"
                  )}
                  key={option.value}
                  onClick={() => handleChange(index)}
                >
                  {option.text}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <span>---</span>
          <ArrowIcon width={8} />
        </>
      )}
    </button>
  );
};

export default DropDownList;
