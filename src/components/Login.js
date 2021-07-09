import Input from "./Input";
import Button from "./button";
import { emailValidator, passwordValidator } from "./validations";

const Login = () => {
  return (
    <div className="authContainer">
      <div>Welcome back !</div>
      <Input type="email" label="Email" validate={emailValidator} />
      <Input type="password" label="Password" validate={passwordValidator} />
      <div
        style={{
          textAlign: "end",
          width: "100%",
          marginRight: "15%",
          fontSize: "1em",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Forgot Password?
      </div>
      <Button text="Login" />
    </div>
  );
};

export default Login;
