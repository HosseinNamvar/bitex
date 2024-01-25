import Image from "next/image";
import Link from "next/link";
import styles from "./homeSlider.module.scss";
import { SlidesData } from "@/data/homepageData";

const HomeSlider = () => {
  return (
    <div className={styles.homeSlider}>
      <div className={`${styles.btnContainer} ${styles.prevSlide}`}>
        <button></button>
      </div>
      <div className={`${styles.btnContainer} ${styles.nextSlide}`}>
        <button></button>
      </div>
      <div className={styles.slide}>
        {SlidesData.map((slide, index) => (
          <Link href={slide.url} key={index}>
            <Image
              src={slide.imgUrl}
              alt=""
              fill
              sizes="(max-width:1080px)"
              priority
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
