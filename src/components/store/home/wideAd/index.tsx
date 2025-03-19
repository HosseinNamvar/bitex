import Link from "next/link";
import Image from "next/image";
import { cn } from "@/shared/utils/styling";

type TProps = {
  imgUrl: string;
  linkText?: string;
  url: string;
  title: string;
  isLightBG?: boolean;
  smallTitle: string;
};

const WideAd = ({ imgUrl, linkText = "Show Deals", smallTitle, title, url, isLightBG = false }: TProps) => {
  return (
    <div
      className={cn("relative text-white h-[200px] flex-grow pl-7", isLightBG ? "styles.darkText" : "styles.lightText")}
    >
      <span className="relative z-5 text-sm mt-10 block">{smallTitle}</span>
      <h3 className="relative z-5 text-lg font-medium block mt-2 mb-12">{title}</h3>
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

export default WideAd;
