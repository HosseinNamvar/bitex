"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ClockIcon } from "@/shared/components/icons/svgIcons";

type TProps = {
  productName: string;
  newPrice: number;
  oldPrice: number;
  image: [string, string];
  dealEndTime: Date;
  spec?: string[];
  url: string;
};

const TodayDealCard = ({ productName, newPrice, oldPrice, image, dealEndTime, spec = [], url }: TProps) => {
  const saveAmount = oldPrice - newPrice;
  const [remainedTime, setRemainedTime] = useState(dealEndTime);

  setTimeout(() => {
    setRemainedTime(new Date(remainedTime.getTime() - 1000));
  }, 1000);

  return (
    <div className="min-w-64 h-[400px] relative p-2 bg-white rounded-xl hover:[&_.imgWrapper_>_img:last-child]:opacity-100 hover:[&_.imgWrapper_>_img:last-child]:scale-105">
      <Link
        href={url}
        className="imgWrapper w-full h-[220px] block relative overflow-hidden border border-gray-300 rounded-lg"
      >
        <Image
          alt=""
          src={image[0]}
          fill
          sizes="(max-width:240px)"
          className="object-contain transition-all duration-400 ease-out"
        />
        <Image
          alt=""
          src={image[1]}
          fill
          sizes="(max-width:240px)"
          className="object-contain transition-all duration-400 ease-out opacity-0 scale-[0.9]"
        />
      </Link>
      <div className="absolute top-5 left-5 rounded-md px-2 py-1 bg-bitex-red-500 text-sm text-white">
        <span>Save {saveAmount.toLocaleString("en-us", { minimumFractionDigits: 2 })} €</span>
      </div>
      <Link href={url}>
        <h3 className="mt-3.5 mb-3 ml-2 text-gray-600">{productName}</h3>
      </Link>
      <div className="h-14 w-full ml-2">
        {!!spec.length &&
          spec.map((item, index) => (
            <span key={index} className="block h-3.5 mb-1 text-sm text-gray-500">
              {item}
            </span>
          ))}
      </div>
      <div className="flex justify-between mx-2 mt-2">
        <section>
          <span className="block text-gray-500 text-sm">
            was{" "}
            {oldPrice.toLocaleString("en-us", {
              useGrouping: true,
              minimumFractionDigits: 2,
            })}{" "}
            €
          </span>
          <span className="block text-lg font-medium text-gray-900">
            {newPrice.toLocaleString("en-us", {
              useGrouping: true,
              minimumFractionDigits: 2,
            })}{" "}
            €
          </span>
        </section>
        <section className="text-center text-red-600 flex items-center flex-col gap-1.5">
          <ClockIcon width={14} className="fill-red-600 my-2 mt-2.5 mx-auto block" />
          <span className="w-20 h-6 rounded-md border border-red-500 pt-[1px] text-sm font-medium">
            {`${remainedTime.getHours().toLocaleString("en-us", { minimumIntegerDigits: 2 })}
            :
            ${remainedTime.getMinutes().toLocaleString("en-us", { minimumIntegerDigits: 2 })}
            :
            ${remainedTime.getSeconds().toLocaleString("en-us", { minimumIntegerDigits: 2 })}`}
          </span>
        </section>
      </div>
    </div>
  );
};

export default TodayDealCard;
