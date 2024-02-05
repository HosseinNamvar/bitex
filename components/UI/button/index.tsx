"use client";
import styles from "./button.module.scss";

interface IProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: IProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
