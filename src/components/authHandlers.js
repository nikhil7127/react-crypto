export const signupHandler = ([username, email, password]) => {
  username = username.value.trim();
  email = email.value.trim();
  password = password.value.trim();
  console.log(username, email, password);
};
