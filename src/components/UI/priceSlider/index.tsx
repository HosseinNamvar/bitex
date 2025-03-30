"use client";
import { TPageStatus } from "@/types/list";
import { SK_Box } from "../skeleton";

type TValue = [number, number];

type TProps = {
  sliderValues: [number, number];
  minMaxLimit: [number, number];
  pageStatus: TPageStatus;
  onChange: (value: TValue) => void;
};

const PriceSlider = ({ sliderValues, minMaxLimit, pageStatus, onChange }: TProps) => {
  if (pageStatus === "pageLoading") {
    return (
      <div className="w-full flex flex-col gap-4 mb-[26px]" style={{ alignItems: "flex-start" }}>
        <SK_Box width="100%" height="30px" />
        <SK_Box width="60%" height="20px" />
      </div>
    );
  }

  if (pageStatus === "categoryHasNoProduct") {
    return <div className="w-full flex flex-col gap-4 mb-[26px]" style={{ alignItems: "flex-start" }} />;
  }
  const range = minMaxLimit[1] - minMaxLimit[0];
  const gapValue = range / 20;

  const handleChangeValue = (index: number, e: React.ChangeEvent<HTMLInputElement>, isSliderData: boolean) => {
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
    <div className="relative w-full flex flex-col pt-3 gap-6">
      <div className="w-full relative">
        <div className="h-1 absolute left-0 right-0 rounded-sm bg-gray-200" />
        <div
          className="h-1 absolute bg-bitex-blue-500 ml-1.5"
          style={{
            left: convertToPercent(sliderValues[0]) + "%",
            right: 100 - convertToPercent(sliderValues[1]) + "%",
          }}
        />
        <input
          type="range"
          className="absolute left-0 -top-2 w-full origin-center pointer-events-none appearance-none"
          value={convertToPercent(sliderValues[0])}
          onChange={(e) => handleChangeValue(0, e, true)}
        />
        <input
          type="range"
          className="absolute left-0 -top-2 w-full origin-center pointer-events-none appearance-none"
          value={convertToPercent(sliderValues[1])}
          onChange={(e) => handleChangeValue(1, e, true)}
        />
      </div>

      <div className="flex h-auto gap-3 text-sm text-gray-700 transition-[border] duration-300">
        <div>
          <label className="block w-full mb-2">From</label>
          <input
            className="w-full h-7 rounded-md p-3 border border-gray-300 hover:border-gray-900"
            type="number"
            value={sliderValues[0]}
            onChange={(e) => handleChangeValue(0, e, false)}
          />
        </div>
        <hr className="h-5 mt-[31px] border-r border-gray-300" />
        <div>
          <label className="block w-full mb-2">To</label>
          <input
            className="w-full h-7 rounded-md p-3 border border-gray-300 hover:border-gray-900"
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
