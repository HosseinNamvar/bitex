import Link from "next/link";
import Image from "next/image";

import styles from "./wideAd.module.scss";

interface Props {
  imgUrl: string;
  linkText?: string;
  url: string;
  title: string;
  isLightBG?: boolean;
  smallTitle: string;
}

const WideAd = ({
  imgUrl,
  linkText = "Show Deals",
  smallTitle,
  title,
  url,
  isLightBG = false,
}: Props) => {
  return (
    <div
      className={`${styles.wideAd} ${
        isLightBG ? styles.darkText : styles.lightText
      }`}
    >
      <span>{smallTitle}</span>
      <h3>{title}</h3>
      <Link href={url}>{linkText}</Link>
      <Image src={imgUrl} fill alt={title} />
    </div>
  );
};

export default WideAd;
