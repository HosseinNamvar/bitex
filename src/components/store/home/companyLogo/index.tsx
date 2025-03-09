import Link from "next/link";

import styles from "./companyLogo.module.scss";

interface IProps {
  width: number;
  bgPositionX: number;
  url: string;
}

const HCompanyLogo = ({ bgPositionX, url, width }: IProps) => {
  return (
    <Link
      className={styles.companyLogo}
      style={{ width: width, backgroundPositionX: bgPositionX }}
      href={url}
    />
  );
};

export default HCompanyLogo;
