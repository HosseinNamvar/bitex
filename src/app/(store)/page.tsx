import { Metadata } from "next";

import {
  CollectionCards,
  CompanyLogoList,
  HomeCategoryList,
  HomeSlider,
  LatestBlogPosts,
  TodayDealCards,
  TopSellingProductsList,
  WideCardRow,
} from "@/features/store/homePage/components";
import { threeSaleCards, twoSaleCards } from "@/features/store/homePage/constants";

export const metadata: Metadata = {
  title: "BITEX - Homepage",
};

export default function Home() {
  return (
    <div className="w-full bg-mint-500">
      <div className="storeContainer flex-col">
        <div className="flex w-full mt-40">
          <HomeCategoryList />
          <HomeSlider />
        </div>
        <WideCardRow cards={threeSaleCards} />
        <TodayDealCards />
        <WideCardRow cards={twoSaleCards} />
        <CollectionCards />
        <TopSellingProductsList />
        <LatestBlogPosts />
        <CompanyLogoList />
      </div>
    </div>
  );
}
