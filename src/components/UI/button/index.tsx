"use client";

import { cn } from "@/shared/utils/styling";

type TProps = {
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const Button = ({ onClick, type = "button", disabled = false, className, children }: TProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={cn(
        "w-full flex cursor-pointer bg-white border border-gray-300 items-center justify-center px-4 py-2 transition-all gap-4 duration-300 text-gray-700 rounded-lg disabled:cursor-default disabled:bg-gray-100",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
