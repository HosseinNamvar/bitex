import styles from "./page.module.scss";
import HomeCategoryList from "@/components/store/home/categories";
import HomeSlider from "@/components/store/home/slider";

export default function Home() {
  return (
    <main className={styles.homePage}>
      <div className="storeContainer">
        <div className={styles.heroContainer}>
          <HomeCategoryList />
          <HomeSlider />
        </div>
      </div>
    </main>
  );
}
