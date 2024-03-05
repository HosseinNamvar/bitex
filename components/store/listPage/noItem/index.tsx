import Link from "next/link";
import styles from "./noItem.module.scss";

interface IProps {
  pageHeader: string;
}

const NoItem = ({ pageHeader }: IProps) => {
  return (
    <div className={styles.noItemContainer}>
      <span> There is no product in {pageHeader} category!</span>
      <div>
        <span> You Can Check These Categories Instead:</span>
        <div>
          <Link href={"/list/pc-laptops/computer"}>Computers</Link>
          <Link href={"/list/pc-laptops/laptops"}>Laptop</Link>
          <Link href={"/list/smartphones"}>Mobile</Link>
          <Link href={"/list/tablets"}>Tablet</Link>
        </div>
      </div>
    </div>
  );
};

export default NoItem;
