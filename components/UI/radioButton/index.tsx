import styles from "./radioButton.module.scss";

interface IProps {
  id: string;
  value: string;
  groupName?: string;
}

const RadioButton = ({ id, value, groupName = "" }: IProps) => {
  return (
    <div className={styles.radioButton}>
      <input type="radio" name={groupName} id={id} value={value} />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default RadioButton;
