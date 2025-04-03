import Link from "next/link";
import { Metadata } from "next";

import HomeCategoryList from "@/components/store/home/categories";
import HomeSlider from "@/components/store/home/slider";
import TodayDealCard from "@/components/store/home/todayDealCard";
import WideAd from "@/components/store/home/wideAd";
import { BlogCardData, CollectionsData, TodayDeals, TopProducts } from "@/data/homepageData";
import CollectionCard from "@/components/store/home/collectionCard";
import ProductCard from "@/components/store/common/productCard";
import HomeBlogCard from "@/components/store/home/blogCard";
import { CompanyLogoList } from "@/components/store/home/companyLogo";

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
        <div className="w-full mt-15 flex flex-col gap-4 md:flex-row">
          <WideAd
            imgUrl="/images/images/wideAd1.jpg"
            smallTitle="Smart Watches"
            title="Save Up to 99€"
            url="/list/watches"
          />
          <WideAd
            imgUrl="/images/images/wideAd2.jpg"
            smallTitle="Laptops"
            title="Save Up to 99€"
            url="/list/pc-laptops/laptops"
          />
          <WideAd
            imgUrl="/images/images/wideAd3.jpg"
            smallTitle="DJI Products"
            title="Save Up to 199€"
            url="/list/photography/drones"
          />
        </div>
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
        <div className="w-full mt-15 flex gap-4 flex-col md:flex-row">
          <WideAd
            imgUrl="/images/images/lensAd.jpg"
            smallTitle="Smart Watches"
            title="Save Up to 99€"
            url="/list/photography/cameras/lenses"
          />
          <WideAd
            imgUrl="/images/images/djiAd.jpg"
            smallTitle="Laptops"
            title="Save Up to 99€"
            url="/list/photography/drones"
          />
        </div>
        <div className="w-full mt-14">
          <div className="flex w-full justify-between items-center mb-7">
            <h2 className="text-2xl font-medium text-gray-700">Collections</h2>
          </div>
          <div className="flex justify-between gap-3.5 overflow-x-scroll 2xl:overflow-x-hidden">
            {CollectionsData.map((collection, index) => (
              <CollectionCard collection={collection} key={index} />
            ))}
          </div>
        </div>
        <div className="w-full mt-14">
          <div className="flex w-full justify-between items-center mb-7">
            <h2 className="text-2xl font-medium text-gray-700">Top Selling Products</h2>
            <Link href={"/"}>view all</Link>
          </div>
          <div className="flex justify-between gap-3.5 overflow-x-scroll pb-7 2xl:pb-2 2xl:overflow-x-visible">
            {TopProducts.map((product, index) => (
              <ProductCard
                name={product.name}
                imgUrl={product.imgUrl}
                price={product.price}
                specs={product.specs}
                url={product.url}
                dealPrice={product.dealPrice}
                key={index}
                staticWidth
              />
            ))}
          </div>
        </div>
        <div className="w-full mt-14">
          <div className="flex w-full justify-between items-center mb-7">
            <h2 className="text-2xl font-medium text-gray-700">Latest Posts</h2>
          </div>
          <div className="flex gap-6 flex-col md:flex-row">
            {BlogCardData.map((blog, index) => (
              <HomeBlogCard
                key={index}
                imgUrl={blog.imgUrl}
                title={blog.title}
                shortText={blog.shortText}
                url={blog.url}
              />
            ))}
          </div>
        </div>
        <CompanyLogoList />
      </div>
    </div>
  );
}
