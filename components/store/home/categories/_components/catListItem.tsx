import Image from "next/image";
import styles from "./catListItem.module.scss";

interface IProps {
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
}: IProps) => {
  return (
    <li className={styles.categoryItem}>
      <div>
        <div className={styles.iconWrapper}>
          <Image
            src={"images/icons/" + image + ".svg"}
            alt={name}
            width={dimension[0]}
            height={dimension[1]}
          />
        </div>
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
