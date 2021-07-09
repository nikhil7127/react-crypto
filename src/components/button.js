const Button = (props) => {
  const text = props.text;
  const request = props.requestHandler;
  return (
    <button onClick={request} className="authBtn">
      {text}
    </button>
  );
};

export default Button;
