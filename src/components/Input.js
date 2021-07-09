const Input = ({ type, label, validate }) => {
  const change = (e) => {
    validate(e);
    if (e.target.value.length > 0) e.target.classList.add("valid");
    else e.target.classList.remove("valid");
  };
  return (
    <div className="input-form">
      <input type={type} onBlur={change} onKeyUp={validate} />
      <span>{label}</span>
      <span className="errorMessage"></span>
    </div>
  );
};

export default Input;
