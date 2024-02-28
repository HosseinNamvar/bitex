"use client";
import styles from "./priceSlider.module.scss";

type TValue = [number, number];

interface IProps {
  sliderValues: [number, number];
  minMaxLimit: [number, number];
  onChange: (value: TValue) => void;
}

const PriceSlider = ({ sliderValues, minMaxLimit, onChange }: IProps) => {
  if (sliderValues[0] === 0 && sliderValues[1] === 0) {
    return <div>Loading</div>;
  }
  const range = minMaxLimit[1] - minMaxLimit[0];
  const gapValue = range / 20;

  const handleChangeValue = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    isSliderData: boolean
  ) => {
    const newValue = isSliderData
      ? (parseFloat(e.currentTarget.value) / 100) * range + minMaxLimit[0]
      : parseInt(e.currentTarget.value);
    if (index === 0) {
      if (newValue < sliderValues[1] - gapValue) {
        onChange([Math.floor(newValue), sliderValues[1]]);
      }
    }
    if (index === 1) {
      if (newValue > sliderValues[0] + gapValue) {
        onChange([sliderValues[0], Math.floor(newValue)]);
      }
    }
  };
  const convertToPercent = (n: number) => {
    return Math.floor(((n - minMaxLimit[0]) / range) * 100);
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
