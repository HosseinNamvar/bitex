type TProps = {
  id: string;
  value: string;
  groupName?: string;
};

const RadioButton = ({ id, value, groupName = "" }: TProps) => {
  return (
    <div className="inline-flex items-center gap-2">
      <input type="radio" name={groupName} id={id} value={value} />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default RadioButton;
