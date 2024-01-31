import Image from "next/image";
import styles from "./catListItem.module.scss";
import { TCategory } from "@/types/common";
import Link from "next/link";

const CategoryListItem = ({ categoryData }: { categoryData: TCategory }) => {
  const { name, iconUrl, iconSize, url, subCategories } = { ...categoryData };
  return (
    <li className={styles.categoryItem}>
      <Link href={url}>
        <div className={styles.iconWrapper}>
          <Image
            src={"images/icons/" + iconUrl + ".svg"}
            alt={name}
            width={iconSize[0]}
            height={iconSize[1]}
          />
        </div>
        {name}
      </Link>
      <div>
        {subCategories && (
          <Image
            className={styles.arrow}
            src={"images/icons/arrowIcon01.svg"}
            width={6}
            height={10}
            alt=""
          />
        )}
      </div>
      {subCategories && (
        <div className={styles.subCat}>
          {subCategories.map((item, index) => (
            <div className={styles.catGroup} key={index}>
              <Link href={item.url}>{item.name}</Link>

              {item.subCategories && item.subCategories?.length > 0 ? (
                <div className={styles.children}>
                  {item.subCategories.map((link, index) => (
                    <Link key={index} href={link.url}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default CategoryListItem;
