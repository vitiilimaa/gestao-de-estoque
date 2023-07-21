import styles from "./styles.module.css";

const Input = ({ type, id, label, value, setValue, ...props }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        name={id}
        type={type || "text"}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
