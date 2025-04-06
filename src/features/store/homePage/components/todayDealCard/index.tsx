import Link from "next/link";

import { TodayDeals } from "@/features/product/constants";

import TodayDealCard from "./TodayDealCard";

export const TodayDealCards = () => {
  return (
    <div className="w-full mt-14">
      <div className="flex w-full justify-between items-center mb-7">
        <h2 className="text-2xl font-medium text-gray-700">Today’s Deals</h2>
        <Link
          href={""}
          className="font-medium bg-[position:right_center] hover:pr-5 pr-6 text-gray-700 bg-[url('/icons/arrowIcon02.svg')] bg-no-repeat bg-right-center transition-all duration-300 ease-out"
        >
          view all
        </Link>
      </div>
      <div className="flex justify-between gap-3.5 overflow-x-scroll pb-7 2xl:pb-0 2xl:overflow-x-hidden">
        {TodayDeals.map((deal, index) => (
          <TodayDealCard
            productName={deal.name}
            oldPrice={deal.price}
            newPrice={deal.dealPrice}
            image={deal.imgUrl}
            spec={deal.specs}
            dealEndTime={deal.dealDate}
            url={deal.url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
