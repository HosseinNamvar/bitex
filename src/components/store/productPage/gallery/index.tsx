"use client";

import Image from "next/image";
import { useState } from "react";

import { CloseIcon } from "@/components/icons/svgIcons";
import { SK_Box } from "@/components/UI/skeleton";
import { cn } from "@/shared/utils/styling";

type TProps = {
  images?: string[];
};

const Gallery = ({ images }: TProps) => {
  const [showZoom, setShowZoom] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="flex">
      <div className="flex relative flex-col gap-4 mr-4">
        {images ? (
          images.map((image, index) => (
            <Image
              src={process.env.IMG_URL + image}
              alt=""
              width={64}
              height={64}
              key={index}
              className={cn(
                "size-16 rounded-md overflow-hidden border object-contain transition-colors duration-300",
                index === selectedIndex ? "border-gray-400" : "cursor-pointer border-gray-300 hover:border-gray-600"
              )}
              onClick={() => setSelectedIndex(index)}
            />
          ))
        ) : (
          <>
            <SK_Box width="64px" height="64px" />
            <SK_Box width="64px" height="64px" />
            <SK_Box width="64px" height="64px" />
          </>
        )}
      </div>
      <div className={"relative w-full h-[300px] sm:h-[540px]"}>
        {images ? (
          <Image
            src={process.env.IMG_URL + images[selectedIndex]}
            alt=""
            fill
            className="cursor-zoom-in object-contain rounded-xl border border-white transition-colors duration-300 hover:border-gray-300"
            sizes="(max-width:700px)"
            onClick={() => setShowZoom(true)}
          />
        ) : (
          <SK_Box width="90%" height="90%" />
        )}
      </div>
      {images && showZoom && (
        <div className={"fixed inset-0 z-[19] flex justify-between items-center flex-col pt-5 pb-10"}>
          <div
            className={"absolute inset-0 backdrop-blur-[5px] bg-[rgba(0,0,0,0.6)]"}
            onClick={() => setShowZoom(false)}
          />
          <div className={"flex w-[90%] h-[85%] bg-white relative overflow-hidden rounded-xl"}>
            <button
              onClick={() => setShowZoom(false)}
              className="absolute z-[2] right-7 cursor-pointer top-7 p-3 bg-white/80 rounded-md transition-colors duration-300 hover:bg-gray-100 active:bg-gray-200"
            >
              <CloseIcon width={16} />
            </button>
            <Image
              src={process.env.IMG_URL + images[selectedIndex]}
              className="object-contain"
              alt=""
              fill
              sizes="(max-width:700px)"
            />
          </div>
          <div
            className={
              "flex justify-center flex-row sm:gap-4 gap-1.5 rounded-lg sm:p-2.5 p-1.5 bg-[rgba(255,255,255,0.5)] z-[2]"
            }
          >
            {images.map((image, index) => (
              <Image
                src={process.env.IMG_URL + image}
                alt=""
                width={64}
                height={64}
                key={index}
                className={cn(
                  "size-16 rounded-md object-contain bg-white border border-gray-300 transition-all duration-300 hover:border-gray-600",
                  index === selectedIndex ? "cursor-pointer border-gray-600 hover:border-gary-600" : "opacity-60"
                )}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
