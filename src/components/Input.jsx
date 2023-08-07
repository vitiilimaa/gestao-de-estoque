import { forwardRef } from "react"

const Input = forwardRef(({ type, id, label, value, setValue, ...props }, ref) => {
  const handleChange = (e) => {
    setValue((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="containerInput">
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        ref={ref}
        id={id}
        name={id}
        type={type || "text"}
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
});

export default Input;
