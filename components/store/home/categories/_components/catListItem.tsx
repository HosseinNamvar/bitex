import Image from "next/image";
import styles from "./catListItem.module.scss";

interface Props {
  name: string;
  image: string;
  dimension: [number, number];
  isLast?: boolean;
  hasSub?: boolean;
}

const CategoryListItem = ({
  name,
  image,
  dimension,
  isLast = false,
  hasSub = false,
}: Props) => {
  return (
    <li className={styles.categoryItem}>
      <div>
        <Image
          src={"images/icons/" + image + ".svg"}
          alt={name}
          width={dimension[0]}
          height={dimension[1]}
        />
        <span>{name}</span>
      </div>
      <div>
        {hasSub && (
          <Image
            className={styles.arrow}
            src={"images/icons/arrowIcon01.svg"}
            width={6}
            height={10}
            alt=""
          />
        )}
        {isLast && (
          <Image
            className={styles.plus}
            src={"images/icons/plusIcon.svg"}
            width={10}
            height={12}
            alt=""
          />
        )}
      </div>
    </li>
  );
};

export default CategoryListItem;
