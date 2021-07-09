import Input from "./Input";
import Button from "./button";
import {
  usernameValidator,
  passwordValidator,
  confirmPasswordValidator,
} from "./validations";
import { signupHandler } from "./authHandlers";

const Signup = () => {
  return (
    <div className="authContainer">
      <div>Join the family !</div>
      <Input type="text" label="Display name" validate={usernameValidator} />
      <Input type="password" label="Password" validate={passwordValidator} />
      <Input
        type="password"
        label="Confirm Password"
        validate={confirmPasswordValidator}
      />
      <Button
        text="Next"
        requestHandler={() => signupHandler(document.querySelectorAll("input"))}
      />
    </div>
  );
};

export default Signup;
