import { useRouter } from "next/navigation";

import { cn } from "@/shared/utils/styling";

import Button from "../button";

type TProps = {
  currentPage: number;
  routeBase: string;
  pagesList: (number | null)[];
};

export const Pagination = ({ currentPage, routeBase, pagesList }: TProps) => {
  const router = useRouter();
  return (
    <div className="flex justify-center mt-4 mb-10 border-t border-gray-200 pt-4 gap-4">
      {pagesList.map((item, idx) =>
        item === null ? (
          <span key={`${item}-${idx}`}>...</span>
        ) : (
          <Button
            key={`${item}-${idx}`}
            onClick={() => router.push(`${routeBase}${item}`)}
            disabled={item === currentPage}
            className={cn({
              "border-none bg-white": item === null,
              "opacity-50": item !== currentPage,
            })}
          >
            {item}
          </Button>
        )
      )}
    </div>
  );
};
