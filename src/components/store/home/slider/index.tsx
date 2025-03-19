"use client";

import Image from "next/image";
import Link from "next/link";
import { SlidesData } from "@/data/homepageData";
import { ArrowIcon } from "@/components/icons/svgIcons";
import { useEffect, useState } from "react";
import { cn } from "@/shared/utils/styling";

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
      activeSlideNum === SlidesData.length - 1 ? setActiveSlideNum(0) : setActiveSlideNum(slideNum);
    } else if (slideNum < activeSlideNum) {
      activeSlideNum === 0 ? setActiveSlideNum(SlidesData.length - 1) : setActiveSlideNum(slideNum);
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
    <div className="w-full lg:ml-[272px] h-[500px] rounded-xl overflow-hidden relative hover:[&>.btnContainer]:opacity-100">
      <div className="btnContainer absolute z-[2] left-7 top-0 bottom-0 flex justify-center items-center opacity-0 transition-all duration-500">
        <button
          onClick={() => handleSliding(activeSlideNum - 1)}
          className="rounded-full flex justify-center size-[50px] rotate-180 border-none cursor-pointer  bg-white/25"
        >
          <ArrowIcon width={10} className="fill-none stroke-black" />
        </button>
      </div>
      <div className="btnContainer absolute z-[2] right-7 top-0 bottom-0 flex justify-center items-center opacity-0 transition-all duration-500">
        <button
          onClick={() => handleSliding(activeSlideNum + 1)}
          className="rounded-full flex justify-center size-[50px] border-none cursor-pointer bg-white/25"
        >
          <ArrowIcon width={10} className="fill-none stroke-black" />
        </button>
      </div>
      <div className="h-full rounded-xl overflow-hidden translate-z-0 top-0 left-0 select-none">
        {SlidesData.map((slide, index) => (
          <div
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={mouseStart}
            onMouseMove={mouseMouse}
            onMouseUp={handleTouchEnd}
            key={index}
            className={cn(
              "inline-block absolute w-full h-full opacity-0 invisible animate-oldSlide transition-all duration-1000 overflow-hidden rounded-[12px]",
              index === activeSlideNum ? "opacity-100 visible animate-newSlide" : ""
            )}
          >
            <Image
              src={slide.imgUrl}
              alt=""
              fill
              className="hover:scale-105 object-cover transition-all duration-500"
              sizes="(max-width:1080px)"
              priority
              draggable={false}
            />
            {slide.msg && (
              <div
                className={cn(
                  "flex invisible opacity-0 flex-col w-full absolute pt-[10%] items-center top-10 bottom-0 lg:w-[50%] text-gray-100 transition-all duration-1000",
                  index === activeSlideNum && "opacity-100 visible animate-newSlide"
                )}
              >
                <h2 className="text-3xl font-light">{slide.msg.title}</h2>
                {slide.msg.desc && (
                  <span
                    className={cn(
                      "text-gray-200  text-sm transition-[margin] duration-[1600ms]",
                      index === activeSlideNum ? "mt-8" : "mt-14"
                    )}
                  >
                    {slide.msg.desc}
                  </span>
                )}
                <Link
                  href={slide.url}
                  className="mt-20 text-gray-100 rounded-md font-normal px-6 py-3 bg-black/80 transition-all duration-300 hover:font-medium hover:text-gray-900 hover:bg-gray-100"
                >
                  {slide.msg.buttonText}
                </Link>
              </div>
            )}
            <span
              className={cn(
                "absolute top-0 w-0 duration-[5s] h-2 bg-white/30 transition-all ease-linear",
                index === activeSlideNum && "animate-autoSlide"
              )}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex gap-6 justify-center items-center">
        {SlidesData.map((slide, index) => (
          <div
            onClick={() => handleSliding(index)}
            key={index}
            className={cn(
              "size-4 border border-white/30 bg-white/40  rounded-full opacity-35 transition-all duration-300",
              index === activeSlideNum
                ? "opacity-100 scale-110"
                : "opacity-35 cursor-pointer hover:bg-white/80 scale-100"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
