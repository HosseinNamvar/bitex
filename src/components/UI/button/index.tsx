"use client";

import { cn } from "@/shared/utils/styling";

type TProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: "button" | "reset" | "submit";
  size?: "sm" | "md" | "base" | "lg";
  children?: React.ReactNode;
};

const Button = ({ onClick, size = "md", type = "button", disabled = false, className, children }: TProps) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs rounded-sm",
    md: "px-4 py-1 text-sm rounded-md",
    base: "px-5 py-2 text-base rounded-lg",
    lg: "px-6 py-2 text-lg rounded-lg",
  };

  return (
    <button
      disabled={disabled}
      type={type}
      className={cn(
        "flex cursor-pointer bg-white border border-gray-300 items-center justify-center px-4 py-2 transition-all gap-4 duration-300 text-gray-700 rounded-lg disabled:cursor-default hover:bg-gray-100 active:bg-gray-200 disabled:bg-gray-100",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
