"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./homeSlider.module.scss";
import { SlidesData } from "@/data/homepageData";
import { ArrowIcon } from "@/components/icons/svgIcons";
import { useEffect, useState } from "react";

const HomeSlider = () => {
  const [activeSlideNum, setActiveSlideNum] = useState(0);
  const touchPos = {
    start: 0,
    end: 0,
  };
  let isDragging = false;

  useEffect(() => {
    const autoSliding = setTimeout(() => {
      handleSliding(activeSlideNum + 1);
    }, 5000);

    return () => {
      clearInterval(autoSliding);
    };
  });

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

  function touchStart(event: React.TouchEvent) {
    isDragging = true;
    touchPos.start = event.touches[0].clientX;
  }
  function touchMove(event: React.TouchEvent) {
    if (isDragging) {
      touchPos.end = event.touches[0].clientX;
    }
  }

  const handleTouchEnd = () => {
    isDragging = false;
    if (touchPos.start !== touchPos.end && touchPos.end !== 0) {
      if (touchPos.start < touchPos.end) {
        handleSliding(activeSlideNum + 1);
      } else {
        handleSliding(activeSlideNum - 1);
      }
    }
  };

  function mouseStart(event: React.MouseEvent) {
    isDragging = true;
    touchPos.start = event.pageX;
  }
  function mouseMouse(event: React.MouseEvent) {
    if (isDragging) {
      touchPos.end = event.pageX;
    }
  }

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
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={mouseStart}
            onMouseMove={mouseMouse}
            onMouseUp={handleTouchEnd}
            key={index}
            className={index === activeSlideNum ? styles.active : ""}
          >
            <Image
              src={slide.imgUrl}
              alt=""
              fill
              sizes="(max-width:1080px)"
              priority
              draggable={false}
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
            <span className={styles.timeBar} />
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
