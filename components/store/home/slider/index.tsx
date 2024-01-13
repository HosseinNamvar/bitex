import Image from "next/image";
import Link from "next/link";
import styles from "./homeSlider.module.scss";

type Slide = {
  imgUrl: string;
  url: string;
};

const HomeSlider = () => {
  const slides: Slide[] = [
    {
      imgUrl: "/images/images/sonyHeadphoneAd.jpg",
      url: "#",
    },
    {
      imgUrl: "/images/images/jblAd.jpg",
      url: "#",
    },
    {
      imgUrl: "/images/images/rogAd.jpg",
      url: "#",
    },
    {
      imgUrl: "/images/images/asusAd.jpg",
      url: "#",
    },
  ];

  return (
    <div className={styles.homeSlider}>
      <div className={`${styles.btnContainer} ${styles.prevSlide}`}>
        <button>
          <Image
            src={"/images/icons/arrowIcon01.svg"}
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={`${styles.btnContainer} ${styles.nextSlide}`}>
        <button>
          <Image
            src={"/images/icons/arrowIcon01.svg"}
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={styles.slide}>
        {slides.map((slide, index) => (
          <Link href={slide.url} key={index}>
            <Image src={slide.imgUrl} alt="" fill />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
