"use client";
import { useState } from "react";
import styles from "./priceSlider.module.scss";

interface IProps {
  minValue: number;
  maxValue: number;
  onChange: (value: number) => void;
}

type TValue = [number, number];

const PriceSlider = ({ minValue, maxValue, onChange }: IProps) => {
  const range = maxValue - minValue;
  const gapValue = range / 10;
  const [sliderValues, setSliderValues] = useState<TValue>([
    minValue,
    maxValue,
  ]);

  const handleChangeValue = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    isSliderData: boolean
  ) => {
    const newValue = isSliderData
      ? (parseInt(e.currentTarget.value) / 100) * range + minValue
      : parseInt(e.currentTarget.value);
    if (index === 0) {
      if (newValue < sliderValues[1] - gapValue && newValue >= minValue)
        setSliderValues([newValue, sliderValues[1]]);
    }
    if (index === 1) {
      if (newValue > sliderValues[0] + gapValue && newValue <= maxValue)
        setSliderValues([sliderValues[0], newValue]);
    }
  };

  const convertToPercent = (n: number) => {
    return ((n - minValue) / range) * 100;
  };

  return (
    <div className={styles.sliderDouble}>
      <div className={styles.sliders}>
        <div className={styles.fullProgress} />
        <div
          className={styles.progress}
          style={{
            left: convertToPercent(sliderValues[0]) + "%",
            right: 100 - convertToPercent(sliderValues[1]) + "%",
          }}
        />
        <input
          type="range"
          value={convertToPercent(sliderValues[0])}
          onChange={(e) => handleChangeValue(0, e, true)}
        />
        <input
          type="range"
          value={convertToPercent(sliderValues[1])}
          onChange={(e) => handleChangeValue(1, e, true)}
        />
      </div>

      <div className={styles.priceInputs}>
        <div>
          <label>From</label>
          <input
            type="number"
            value={sliderValues[0]}
            onChange={(e) => handleChangeValue(0, e, false)}
          />
        </div>
        <hr />
        <div>
          <label>To</label>
          <input
            type="number"
            value={sliderValues[1]}
            onChange={(e) => handleChangeValue(1, e, false)}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
