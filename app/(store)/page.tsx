import Link from "next/link";

import styles from "./page.module.scss";

import HomeCategoryList from "@/components/store/home/categories";
import HomeSlider from "@/components/store/home/slider";
import TodayDealCard from "@/components/store/home/todayDealCard";
import WideAd from "@/components/store/home/wideAd";
import {
  BlogCardData,
  CollectionsData,
  TodayDeals,
  TopProducts,
} from "@/data/homepageData";
import CollectionCard from "@/components/store/home/collectionCard";
import ProductCard from "@/components/store/common/productCard";
import HomeBlogCard from "@/components/store/home/blogCard";
import HCompanyLogo from "@/components/store/home/companyLogo";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <div className="storeContainer flexCol">
        <div className={styles.heroContainer}>
          <HomeCategoryList />
          <HomeSlider />
        </div>
        <div className={styles.wideAdContainer}>
          <WideAd
            imgUrl="/images/images/wideAd1.jpg"
            smallTitle="Smart Watches"
            title="Save Up to 99€"
            url="#"
          />
          <WideAd
            imgUrl="/images/images/wideAd2.jpg"
            smallTitle="Laptops"
            title="Save Up to 99€"
            url="#"
          />
          <WideAd
            imgUrl="/images/images/wideAd3.jpg"
            smallTitle="DJI Products"
            title="Save Up to 199€"
            url="#"
          />
        </div>
        <div className={styles.homeSection}>
          <div className={styles.sectionHeader}>
            <h2>Today’s Deals</h2>
            <Link href={""}>view all</Link>
          </div>
          <div className={styles.cardsWrapper}>
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
        <div className={styles.wideAdContainer}>
          <WideAd
            imgUrl="/images/images/lensAd.jpg"
            smallTitle="Smart Watches"
            title="Save Up to 99€"
            url="#"
          />
          <WideAd
            imgUrl="/images/images/djiAd.jpg"
            smallTitle="Laptops"
            title="Save Up to 99€"
            url="#"
          />
        </div>
        <div className={styles.homeSection}>
          <div className={styles.sectionHeader}>
            <h2>Collections</h2>
          </div>
          <div className={styles.cardsWrapper}>
            {CollectionsData.map((collection, index) => (
              <CollectionCard collection={collection} key={index} />
            ))}
          </div>
        </div>
        <div className={styles.homeSection}>
          <div className={styles.sectionHeader}>
            <h2>Top Selling Products</h2>
            <Link href={"/topProducts"}>view all</Link>
          </div>
          <div className={styles.cardsWrapper}>
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
        <div className={styles.homeSection}>
          <div className={styles.sectionHeader}>
            <h2>Latest Posts</h2>
          </div>
          <div className={styles.blogCardContainer}>
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
        <div className={styles.companiesSection}>
          <h2>Selected Brands</h2>
          <div>
            <HCompanyLogo width={104} bgPositionX={0} url="/companies/epson" />
            <HCompanyLogo width={50} bgPositionX={-105} url="/companies/hp" />
            <HCompanyLogo width={50} bgPositionX={-156} url="/companies/dell" />
            <HCompanyLogo
              width={44}
              bgPositionX={-207}
              url="/companies/apple"
            />
            <HCompanyLogo
              width={47}
              bgPositionX={-252}
              url="/companies/xiaomi"
            />
            <HCompanyLogo
              width={54}
              bgPositionX={-300}
              url="/companies/logitech"
            />
            <HCompanyLogo width={55} bgPositionX={-355} url="/companies/jbl" />
            <HCompanyLogo width={98} bgPositionX={-411} url="/companies/asus" />
          </div>
        </div>
      </div>
    </main>
  );
}
