"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./homeSlider.module.scss";
import { SlidesData } from "@/data/homepageData";
import { ArrowIcon } from "@/components/icons/svgIcons";
import { useState } from "react";

const HomeSlider = () => {
  const [activeSlideNum, setActiveSlideNum] = useState(0);

  const handleSliding = (slideNum: number) => {
    if (slideNum > activeSlideNum) {
      activeSlideNum === SlidesData.length - 1
        ? setActiveSlideNum(0)
        : setActiveSlideNum(slideNum);
    } else if (slideNum < activeSlideNum) {
      activeSlideNum === 0
        ? setActiveSlideNum(SlidesData.length - 1)
        : setActiveSlideNum(slideNum);
    }
  };
  return (
    <div className={styles.homeSlider}>
      <div className={`${styles.btnContainer} ${styles.prevSlide}`}>
        <button onClick={() => handleSliding(activeSlideNum - 1)}>
          <ArrowIcon width={10} strokeWidth={1} />
        </button>
      </div>
      <div className={`${styles.btnContainer} ${styles.nextSlide}`}>
        <button onClick={() => handleSliding(activeSlideNum + 1)}>
          <ArrowIcon width={10} strokeWidth={1} />
        </button>
      </div>
      <div className={styles.slide}>
        {SlidesData.map((slide, index) => (
          <div
            key={index}
            className={index === activeSlideNum ? styles.active : ""}
          >
            <Image
              src={slide.imgUrl}
              alt=""
              fill
              sizes="(max-width:1080px)"
              priority
            />
            {slide.msg && (
              <div
                className={`${styles.slideData} ${
                  index === activeSlideNum && styles.active
                }`}
              >
                <h2>{slide.msg.title}</h2>
                {slide.msg.desc && <span>{slide.msg.desc}</span>}
                <Link href={slide.url}>{slide.msg.buttonText}</Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.slideBtnWrapper}>
        {SlidesData.map((slide, index) => (
          <div
            onClick={() => handleSliding(index)}
            key={index}
            className={index === activeSlideNum ? styles.active : ""}
          >
            <span />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
