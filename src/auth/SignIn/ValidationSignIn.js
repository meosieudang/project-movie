import Validator from "validator";

export const validateSignIn = value => {
  const err = {};
  if (Validator.isEmpty(value.username))
    err.username = "Please enter your username bro";
  if (Validator.isEmpty(value.password))
    err.password = "Please enter your password bro";
  return err;
};
