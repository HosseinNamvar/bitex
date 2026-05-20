import Image from "next/image";
import Link from "next/link";

import { TProductCard } from "@/shared/types/common";
import { cn } from "@/shared/utils/styling";

const ProductCard = ({
  name,
  imgUrl,
  price,
  dealPrice = undefined,
  specs,
  url,
  isAvailable = true,
  staticWidth = false,
}: TProductCard) => {
  return (
    <Link
      href={url}
      className={cn(
        "bg-white rounded-xl p-2 transition-all duration-500 relative hover:drop-shadow-sm hover:[&_.imageWrapper>img:last-child]:opacity-100 hover:[&_.imageWrapper>img:last-child]:scale-[1.05]",
        staticWidth && "min-w-64"
      )}
    >
      {!isAvailable && (
        <div className="flex left-2 right-2 bottom-2 top-2 bg-white/40 backdrop-blur-[1px] absolute z-[1] items-center justify-center rounded-lg">
          <span className="mt-14 text-gray-100 font-light px-6 py-1 backdrop-blur-[6px] rounded-md shadow-gray-200 bg-black/60">
            Out of Stock
          </span>
        </div>
      )}
      <div className="imageWrapper hover:border-gray-300 w-full h-[225px] block relative rounded-xl border border-gray-200 overflow-hidden transition-all duration-500">
        <Image
          src={imgUrl[0]}
          alt={name}
          fill
          sizes="(max-width: 240px)"
          className="object-contain transition-all duration-400 ease-out"
        />
        <Image
          src={imgUrl[1]}
          alt={name}
          fill
          sizes="(max-width: 240px)"
          className="object-contain transition-all duration-400 ease-out opacity-0 scale-[0.9]"
        />
      </div>
      <span className="inline-block text-gray-800 mt-2.5 mb-2 ml-2">{name}</span>
      <div className="h-16 flex flex-col">
        {specs.map((spec, index) => (
          <span key={index} className="block text-sm ml-2 text-gray-600">
            {spec}
          </span>
        ))}
      </div>
      <div className="flex items-center h-10 mt-6 ml-2">
        <div className="flex-grow relative">
          {dealPrice ? (
            <>
              <div className="w-48 h-5 flex justify-start absolute -top-6">
                <span className="font-medium block text-sm rounded-sm px-2 pt-[1px] text-red-800 bg-red-200">
                  -
                  {(100 - (dealPrice / price) * 100).toLocaleString("en-us", {
                    maximumFractionDigits: 0,
                  })}
                  %
                </span>
                <span className="block w-full line-through text-gray-700 text-sm ml-2">
                  was {price.toLocaleString("en-us", { minimumFractionDigits: 2 })}€
                </span>
              </div>
              <span className="text-lg font-medium text-gray-800">
                {dealPrice.toLocaleString("en-us", {
                  minimumFractionDigits: 2,
                })}
                €
              </span>
            </>
          ) : (
            <span className="text-lg font-medium text-gray-800">
              {price.toLocaleString("en-us", { minimumFractionDigits: 2 })}€
            </span>
          )}
        </div>
        <div className="flex-grow text-right">
          <button className="cursor-pointer size-9 border-none bg-no-repeat bg-center rounded-sm opacity-60 transition-opacity duration-300 hover:opacity-100 bg-black/0 bg-[url('/icons/heartIcon.svg')] bg-[length:20px_18px]" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
