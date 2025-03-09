"use client";
import { CloseIcon } from "@/components/icons/svgIcons";
import styles from "./gallery.module.scss";

import Image from "next/image";
import { useState } from "react";
import { SK_Box } from "@/components/UI/skeleton";

interface IProps {
  images?: string[];
}

const Gallery = ({ images }: IProps) => {
  const [showZoom, setShowZoom] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.gallery}>
      <div className={styles.imageList}>
        {images ? (
          images.map((image, index) => (
            <Image
              src={process.env.IMG_URL + image}
              alt=""
              width={64}
              height={64}
              key={index}
              className={index === selectedIndex ? styles.active : ""}
              onClick={() => setSelectedIndex(index)}
            />
          ))
        ) : (
          <>
            <SK_Box width="64px" height="64px" />
            <SK_Box width="64px" height="64px" />
            <SK_Box width="64px" height="64px" />
          </>
        )}
      </div>
      <div className={styles.imageWrapper}>
        {images ? (
          <Image
            src={process.env.IMG_URL + images[selectedIndex]}
            alt=""
            fill
            sizes="(max-width:700px)"
            onClick={() => setShowZoom(true)}
          />
        ) : (
          <SK_Box width="90%" height="90%" />
        )}
      </div>
      {images && showZoom ? (
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Gallery;
