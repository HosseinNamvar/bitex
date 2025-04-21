type TProps = {
  width?: string | number;
  height?: string | number;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  className?: string;
};

export const SK_Box = ({ width = "100%", height = "1rem", rounded = "sm", className = "" }: TProps) => {
  return (
    <div
      className={`
        relative inline-block overflow-hidden bg-gray-200
        after:absolute after:inset-0
        after:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0)_100%)]
        after:animate-[loading_1.5s_infinite]
        rounded-${rounded} ${className}
      `}
      style={{ width, height }}
    />
  );
};
