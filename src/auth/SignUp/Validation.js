import Validator from "validator";

export const validate = value => {
  const err = {};

  if (Validator.isEmpty(value.username))
    err.username = "Please enter your username bro";
  if (Validator.isEmpty(value.password))
    err.password = "Please enter your password bro";
  if (Validator.isEmpty(value.name)) err.name = "Please enter your name bro";
  if (Validator.isEmpty(value.phone))
    err.phoneEmpty = "Please enter your phone bro";
  if (Validator.isEmpty(value.confirmPassword))
    err.confirmPassword = "Please enter your re-password bro";
  if (!Validator.isEmail(value.email)) err.email = "Invalid email bro";
  if (!Validator.isNumeric(value.phone)) err.phone = "Only number bro !!";
  if (!Validator.equals(value.password, value.confirmPassword))
    err.match = "Password mismatched";

  return err;
};
