"use client";
import { CloseIcon } from "@/components/icons/svgIcons";
import styles from "./gallery.module.scss";

import Image from "next/image";
import { useState } from "react";

interface IProps {
  images: string[];
}

const Gallery = ({ images }: IProps) => {
  const [showZoom, setShowZoom] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.gallery}>
      <div className={styles.imageList}>
        {images.map((image, index) => (
          <Image
            src={process.env.IMG_URL + image}
            alt=""
            width={64}
            height={64}
            key={index}
            className={index === selectedIndex ? styles.active : ""}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={process.env.IMG_URL + images[selectedIndex]}
          alt=""
          fill
          sizes="(max-width:700px)"
          onClick={() => setShowZoom(true)}
        />
      </div>
      {showZoom && (
        <div className={styles.zoomWindow}>
          <div
            className={styles.background}
            onClick={() => setShowZoom(false)}
          />
          <div className={styles.mainImage}>
            <button onClick={() => setShowZoom(false)}>
              <CloseIcon width={16} />
            </button>
            <Image
              src={process.env.IMG_URL + images[selectedIndex]}
              alt=""
              fill
              sizes="(max-width:700px)"
            />
          </div>
          <div className={styles.imageList}>
            {images.map((image, index) => (
              <Image
                src={process.env.IMG_URL + image}
                alt=""
                width={64}
                height={64}
                key={index}
                className={index === selectedIndex ? styles.active : ""}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
