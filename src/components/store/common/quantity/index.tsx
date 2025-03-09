"use client";
import { MinusIcon, PlusIcon } from "@/components/icons/svgIcons";
import styles from "./quantity.module.scss";

interface IProps {
  quantity: number;
  iconWidth?: number;
  onChange: (isReducing: boolean) => void;
}

const Quantity = ({ onChange, quantity, iconWidth = 12 }: IProps) => {
  return (
    <div className={styles.quantity}>
      <button onClick={() => onChange(true)} disabled={quantity === 1}>
        <MinusIcon width={iconWidth} />
      </button>
      <span
        style={{
          fontSize: iconWidth * 2,
          width: iconWidth * 1.6,
        }}
      >
        {quantity}
      </span>
      <button onClick={() => onChange(false)}>
        <PlusIcon width={iconWidth} />
      </button>
    </div>
  );
};

export default Quantity;
