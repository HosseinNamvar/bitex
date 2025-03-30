import { cn } from "@/shared/utils/styling";

type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "sm" | "md" | "base" | "lg";
};

export const Input = (props: TProps) => {
  const { inputSize = "md", className, ...rest } = props;

  const sizeClasses = {
    sm: "px-2 py-1 text-xs rounded-sm",
    md: "px-3 py-1.5 text-sm rounded-md",
    base: "px-4 py-2 text-base rounded-lg",
    lg: "px-5 py-2 text-lg rounded-lg",
  };

  return (
    <input
      {...rest}
      className={cn(
        "w-full bg-white border border-gray-300 text-gray-700 transition-colors duration-300 focus:border-bitex-blue-500 hover:border-gray-400",
        sizeClasses[inputSize],
        className
      )}
    />
  );
};

export default Input;
