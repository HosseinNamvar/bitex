import Link from "next/link";
import styles from "./collectionCard.module.scss";
import Image from "next/image";
import { TCollectionCard } from "@/types/collections";

interface IProps {
  collection: TCollectionCard;
}

const CollectionCard = ({ collection }: IProps) => {
  return (
    <div className={styles.collectionCard}>
      <div className={styles.leftCol}>
        <h2>{collection.name}</h2>
        {collection.collections.map((collection, index) => (
          <Link href={collection.url} key={index}>
            {collection.label}
          </Link>
        ))}
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={collection.imgUrl}
          alt={collection.name}
          fill
          sizes="(max-width:140px)"
        />
      </div>
      <Link href={collection.url}>{`All ${collection.name}`}</Link>
    </div>
  );
};

export default CollectionCard;
