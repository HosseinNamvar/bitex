import styles from "./skeleton.module.scss";

interface IProps {
  width: string;
  height?: string;
}

export const SK_Box = ({ width, height }: IProps) => {
  return <div className={styles.skeletonBase} style={{ width, height }} />;
};

export const SK_Circle = ({ width }: IProps) => {
  return (
    <div
      className={`${styles.skeletonBase} ${styles.circle}`}
      style={{ width, height: width }}
    />
  );
};
