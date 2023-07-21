import styles from "./styles.module.css";

const TextArea = ({ id, label, value, setValue, cols, rows, ...props }) => {
  return (
    <div className={styles.textAreaField}>
      <label htmlFor={id}>{label}</label>
      <textarea
        {...props}
        id={id}
        name={id}
        style={{ resize: "none" }}
        cols={cols || "30"}
        rows={rows || "10"}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      ></textarea>
    </div>
  );
};

export default TextArea;
