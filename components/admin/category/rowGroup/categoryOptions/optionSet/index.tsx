import { TOptionSet } from "@/types/common";
import styles from "./optionSet.module.scss";
import Button from "@/components/UI/button";

interface IProps {
  data: TOptionSet;
}

const OptionSet = ({ data }: IProps) => {
  const { id, name, options, type } = data;
  return (
    <div className={styles.optionSet} key={id}>
      <div className={styles.col1}>
        <span>{name}</span>
        <Button text="delete" />
      </div>
      <div className={styles.col2}>
        {options.map((singleOption, index) => (
          <div className={styles.colorRow} key={index}>
            <div>
              <span>{singleOption.name}</span>
              <span>{singleOption.value}</span>
            </div>
            <div>
              <Button text="delete" onClick={() => "delete"} />
            </div>
          </div>
        ))}
        <div className={styles.colorAdd}>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <Button text="Add" onClick={() => "Add"} />
        </div>
      </div>
    </div>
  );
};

export default OptionSet;
