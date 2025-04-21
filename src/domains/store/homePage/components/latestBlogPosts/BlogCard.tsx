import Image from "next/image";
import Link from "next/link";

import { TBlogCard } from "@/types/common";

const HomeBlogCard = ({ title, imgUrl, shortText, url }: TBlogCard) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white transition-shadow duration-300 hover:drop-shadow-sm">
      <Link href={url} className="w-full h-[250px] block relative">
        <Image src={imgUrl} fill alt={title} sizes="(max-width:430px)" className="object-cover" />
      </Link>
      <Link href={url}>
        <h2 className="font-medium text-gray-800 my-6 mx-7 border-b border-white">{title}</h2>
      </Link>
      <span className="text-sm block leading-6 mx-7 mb-7 text-gray-800">
        {shortText.length > 180 ? shortText.slice(0, 180) + "..." : shortText}
      </span>
    </div>
  );
};

export default HomeBlogCard;
