import { SK_Box } from "@/shared/components/UI/skeleton";

export const ProductListSkeleton = (): React.ReactNode[] => {
  return Array.from({ length: 6 }, (_, idx) => (
    <div className="flex flex-col gap-3 w-[240px]" key={idx}>
      <SK_Box width="100%" height="160px" />
      <SK_Box width="70%" height="26px" />
      <div className="flex flex-col gap-2">
        <SK_Box width="40%" height="12px" />
        <SK_Box width="40%" height="12px" />

        <SK_Box width="40%" height="12px" />
      </div>
      <SK_Box width="60%" height="20px" />
    </div>
  ));
};
