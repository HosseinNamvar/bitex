import styles from "./page.module.scss";
import HomeCategoryList from "@/components/store/home/categories";
import HomeSlider from "@/components/store/home/slider";
import WideAd from "@/components/store/home/wideAd";

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
      </div>
    </main>
  );
}
