import Link from "next/link";

import styles from "./page.module.scss";

import HomeCategoryList from "@/components/store/home/categories";
import HomeSlider from "@/components/store/home/slider";
import TodayDealCard from "@/components/store/home/todayDealCard";
import WideAd from "@/components/store/home/wideAd";
import { DealsEndTime } from "@/data/homepage";

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
        <div className={styles.todayDeals}>
          <div className={styles.sectionHeader}>
            <h2>Today’s Deals</h2>
            <Link href={""}>view all</Link>
          </div>
          <div className={styles.cardsWrapper}>
            <TodayDealCard
              productName="Apple Airpods MAX"
              oldPrice={579.0}
              newPrice={519.0}
              image="/images/products/airpodsMax1.jpg"
              spec={["Wireless", "Noise Cancelling", "Built-In Microphone"]}
              dealEndTime={DealsEndTime[0]}
              url=""
            />
            <TodayDealCard
              productName="Apple Magic Mouse"
              oldPrice={799.99}
              newPrice={55.49}
              image="/images/products/appleMouse1.jpg"
              spec={["Bluetooth", "White"]}
              dealEndTime={DealsEndTime[1]}
              url=""
            />
            <TodayDealCard
              productName="Apple iMac"
              oldPrice={1299.0}
              newPrice={1119.0}
              image="/images/products/imac2_1.jpg"
              spec={["8GB Memory", "256GB", "M3 chip"]}
              dealEndTime={DealsEndTime[2]}
              url=""
            />
            <TodayDealCard
              productName="Apple 12.9 Inch iPad Pro"
              oldPrice={1199.0}
              newPrice={1149.0}
              image="/images/products/ipadPro1.jpg"
              spec={["Wi-Fi", "256GB", "12.9-Inch"]}
              dealEndTime={DealsEndTime[3]}
              url=""
            />
            <TodayDealCard
              productName="Apple iPhone 15 Pro Max"
              oldPrice={1199.99}
              newPrice={1059.99}
              image="/images/products/iphone1.jpg"
              spec={["256GB", "Blue Titanium"]}
              dealEndTime={DealsEndTime[4]}
              url=""
            />
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
      </div>
    </main>
  );
}
