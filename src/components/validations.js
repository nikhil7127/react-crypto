const errorBorder = "2px solid red";
const successBorder = "";

export const emailValidator = (e) => {
  let val = e.target.parentNode;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let changeBorder = val.querySelector("input").style;
  const errorSpan = val.querySelector(".errorMessage");
  let validEmail = re.test(e.target.value.trim().toLowerCase());
  if (e.target.value.trim().length < 1) {
    changeBorder.border = errorBorder;
    errorSpan.classList.add("display");
    errorSpan.innerText = `Email is required`;
  } else {
    if (validEmail) {
      errorSpan.classList.remove("display");
      changeBorder.border = successBorder;
    } else {
      changeBorder.border = errorBorder;
      errorSpan.classList.add("display");
      errorSpan.innerText = `Not a valid email`;
    }
  }
};

export const passwordValidator = (e) => {
  let val = e.target.parentNode;
  let changeBorder = val.querySelector("input").style;
  const errorSpan = val.querySelector(".errorMessage");
  if (e.target.value.trim().length < 1) {
    changeBorder.border = errorBorder;
    errorSpan.classList.add("display");
    errorSpan.innerText = `Password is required`;
  } else if (
    e.target.value.trim().length > 0 &&
    e.target.value.trim().length < 8
  ) {
    changeBorder.border = errorBorder;
    errorSpan.classList.add("display");
    errorSpan.innerText = `password must contain atleast 8 characters`;
  } else if (e.target.value.trim().length > 7) {
    errorSpan.classList.remove("display");
    changeBorder.border = successBorder;
  }
};

export const confirmPasswordValidator = (e) => {
  let val = e.target.parentNode;
  let changeBorder = val.querySelector("input").style;
  const errorSpan = val.querySelector(".errorMessage");
  if (e.target.value.trim().length < 1) {
    changeBorder.border = errorBorder;
    errorSpan.classList.add("display");
    errorSpan.innerText = `Confrim Password is required`;
  } else {
    if (
      e.target.value.trim() ==
      document.querySelectorAll("input")[1].value.trim()
    ) {
      changeBorder.border = successBorder;
      errorSpan.classList.remove("display");
    } else {
      changeBorder.border = errorBorder;
      errorSpan.classList.add("display");
      errorSpan.innerText = `Both password must be equal`;
    }
  }
};

export const usernameValidator = (e) => {
  let val = e.target.parentNode;
  const re = /^[a-zA-Z0-9_]{6,}/;
  let changeBorder = val.querySelector("input").style;
  const errorSpan = val.querySelector(".errorMessage");
  let validEmail = re.test(e.target.value.trim().toLowerCase());
  if (e.target.value.trim().length < 1) {
    changeBorder.border = errorBorder;
    errorSpan.classList.add("display");
    errorSpan.innerText = `Username is required`;
  } else {
    if (validEmail) {
      errorSpan.classList.remove("display");
      changeBorder.border = successBorder;
    } else {
      changeBorder.border = errorBorder;
      errorSpan.classList.add("display");
      errorSpan.innerText = `Not a valid username`;
    }
  }
};
