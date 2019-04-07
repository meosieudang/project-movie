import axios from "axios";
import * as type from "../constant/actionType";

export const signInRequest = data => dispatch => {
  return axios
    .post(
      `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${
        data.username
      }&matkhau=${data.password}`
    )
    .then(res => dispatch(signIn(res.data)))
    .catch(err => console.log(err));
};

export const signIn = data => {
  return {
    type: type.LOGIN_SUCCESS,
    payload: data
  };
};

export const signOut = () => {
  return {
    type: type.LOGOUT_SUCCESS
  };
};

export const signUpRequest = data => dispatch => {
  return axios({
    method: "POST",
    url: "http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung",
    data: data
  })
    .then(res => dispatch(signUp(res.data)))
    .catch(err => console.log(err));
};

export const signUp = data => {
  return {
    type: type.SIGNUP_SUCCESS,
    payload: data
  };
};
