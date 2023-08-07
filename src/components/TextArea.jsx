const TextArea = ({ id, label, value, setValue, cols, rows, ...props }) => {
  const handleChange = (e) => {
    setValue((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="containerTextArea">
      <label htmlFor={id}>{label}</label>
      <textarea
        {...props}
        id={id}
        name={id}
        style={{ resize: "none" }}
        cols={cols || "30"}
        rows={rows || "10"}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
