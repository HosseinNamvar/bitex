"use client";
import { MinusIcon, PlusIcon } from "@/components/icons/svgIcons";
// import "styles from" "./quantity.module.scss";

interface IProps {
  quantity: number;
  iconWidth?: number;
  onChange: (isReducing: boolean) => void;
}

const Quantity = ({ onChange, quantity, iconWidth = 12 }: IProps) => {
  return (
    <div className={"flex items-center"}>
      <button
        onClick={() => onChange(true)}
        disabled={quantity === 1}
        className="size-8 flex justify-center stroke-gray-500 hover:stroke-gray-800 items-center rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-200 active:bg-gray-300 disabled:cursor-default disabled:hover:bg-white"
      >
        <MinusIcon width={iconWidth} />
      </button>
      <span
        className="select-none w-5 text-center mx-6 text-gray-700"
        style={{
          fontSize: iconWidth * 2,
          width: iconWidth * 1.6,
        }}
      >
        {quantity}
      </span>
      <button
        onClick={() => onChange(false)}
        className="size-8 flex justify-center stroke-gray-500 hover:stroke-gray-800 items-center rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-200 active:bg-gray-300 disabled:cursor-default disabled:hover:bg-white"
      >
        <PlusIcon width={iconWidth} className="stroke-gray-500" />
      </button>
    </div>
  );
};

export default Quantity;
