import Image from "next/image";
import Link from "next/link";
import { TBlogCard } from "@/types/common";

import styles from "./homeBlogCard.module.scss";

const HomeBlogCard = ({ title, imgUrl, shortText, url }: TBlogCard) => {
  return (
    <div className={styles.blogCard}>
      <Link href={url} className={styles.imgWrapper}>
        <Image src={imgUrl} fill alt={title} sizes="(max-width:430px)" />
      </Link>
      <Link href={url}>
        <h2>{title}</h2>
      </Link>
      <span>
        {shortText.length > 180 ? shortText.slice(0, 180) + "..." : shortText}
      </span>
    </div>
  );
};

export default HomeBlogCard;
