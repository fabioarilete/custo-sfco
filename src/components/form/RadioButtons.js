import styles from "./RadioButtons.module.css";

export default function RadioButtons({
  name,
  text,
  value,
  label1,
  label2,
  handleOnChange,
}) {
  const options = [
    { value: "1", label: label1 },
    { value: "0", label: label2 },
  ];

  return (
    <div className={styles.radioControl}>
      <h3>{text}</h3>
      {options.map((option) => (
        <div key={option.value}>
          <label htmlFor={option.value}>{option.label}</label>
          <input
            type="radio"
            name={name}
            value={option.value}
            id={option.value}
            checked={value === option.value}
            onChange={handleOnChange}
          />
        </div>
      ))}
    </div>
  );
}
