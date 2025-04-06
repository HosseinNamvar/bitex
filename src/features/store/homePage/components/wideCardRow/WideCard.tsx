import Image from "next/image";
import Link from "next/link";

import { cn } from "@/shared/utils/styling";

import { TWideCard } from "../../types";

export const WideCard = ({ imgUrl, linkText = "Show Deals", smallTitle, title, url, isLightBG = false }: TWideCard) => {
  return (
    <div className={cn("relative h-[200px] flex-grow pl-7", isLightBG ? "text-gray-900" : "text-gray-100")}>
      <span className="relative z-5 text-sm mt-8 block">{smallTitle}</span>
      <h3 className="relative z-5 text-lg font-medium block mt-2 mb-16">{title}</h3>
      <Link href={url} className="relative z-5">
        {linkText}
      </Link>
      <Image
        src={imgUrl}
        className="z-1 absolute rounded-xl w-full h-full object-cover"
        fill
        alt={title}
        sizes="(max-width:440px)"
      />
    </div>
  );
};
