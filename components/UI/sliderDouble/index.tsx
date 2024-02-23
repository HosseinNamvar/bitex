"use client";
import { useState } from "react";
import styles from "./sliderDouble.module.scss";

interface IProps {
  minValue: number;
  maxValue: number;
  onChange: (value: number) => void;
}

type THandlers = [boolean, boolean];
type TPositions = [number, number];
let prevPosition = 0;

const SliderDouble = ({ minValue, maxValue, onChange }: IProps) => {
  const [isFocus, setIsFocus] = useState<THandlers>([false, false]);
  const [xPosition, setXPosition] = useState<TPositions>([0, 100]);

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    prevPosition = e.screenX;
    const mouseFocus: THandlers = [...isFocus];
    mouseFocus[index] = true;
    setIsFocus([...mouseFocus]);
    console.log(prevPosition);
  };
  const handleMouseMove = (index: number, e: React.MouseEvent) => {
    if (isFocus[index]) {
      const tempPosition: TPositions = [...xPosition];
      tempPosition[index] = tempPosition[index];
      //   prevPosition = prevPosition - e.screenX;
      setXPosition([...tempPosition]);
      console.log(e.screenX - prevPosition);
    }
  };
  const handleMouseUp = (index: number) => {
    const mouseFocus: THandlers = [...isFocus];
    mouseFocus[index] = false;
    setIsFocus([...mouseFocus]);
    console.log("Mouse Up");
  };
  return (
    <div className={styles.sliderDouble}>
      <span
        className={styles.leftHandle}
        onMouseDown={(e) => handleMouseDown(0, e)}
        onMouseMove={(e) => handleMouseMove(0, e)}
        onMouseUp={() => handleMouseUp(0)}
        style={{ left: `${xPosition[0] + "%"}` }}
      />
      <span
        className={styles.rightHandle}
        onMouseDown={(e) => handleMouseDown(1, e)}
        onMouseMove={(e) => handleMouseMove(1, e)}
        onMouseUp={() => handleMouseUp(1)}
        style={{ left: `${xPosition[1] + "%"}` }}
      />
      <div />
    </div>
  );
};

export default SliderDouble;
