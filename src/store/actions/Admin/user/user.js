import * as type from "../../../constant/actionTypeAdmin";
import axios from "axios";

export const getListUserRequest = () => dispatch => {
  return axios
    .get(
      "http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP07"
    )
    .then(res => dispatch(getListUser(res.data)))
    .catch(err => console.log(err));
};

export const getListUser = data => {
  return {
    type: type.GET_LIST_USER,
    payload: data
  };
};

export const createUserRequest = user => dispatch => {
  return axios
    .post("http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung", user)
    .then(res =>
      res.data !== "Tài khoản đã tồn tại"
        ? dispatch(createUser(res.data))
        : dispatch(createUserError(res.data))
    )

    .catch(err => console.log(err));
};

export const createUser = data => {
  return {
    type: type.CREATE_USER,
    payload: data
  };
};

export const createUserError = data => {
  return {
    type: type.CREATE_USER_ERROR,
    payload: data
  };
};

export const deleteUserRequest = user => dispatch => {
  return axios
    .delete(
      `http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${
        user.TaiKhoan
      }`
    )
    .then(res => dispatch(deleteUser(res.data, user)))
    .catch(err => console.log(err));
};

export const deleteUser = (res, userDelete) => {
  return {
    type: type.DELETE_USER,
    payload: res,
    userDelete
  };
};

export const getUser = user => {
  return {
    type: type.GET_USER,
    payload: user
  };
};

export const editUserRequest = userEdit => dispatch => {
  return axios
    .post(
      "http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin",
      userEdit
    )
    .then(res => dispatch(editUser(res.data)))
    .catch(err => console.log(err));
};

export const editUser = data => {
  return {
    type: type.EDIT_USER,
    payload: data
  };
};

export const getAuthRequest = () => dispatch => {
  return axios
    .get("http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung")
    .then(res => dispatch(getAuth(res.data)))
    .catch(err => console.log(err));
};

export const getAuth = data => {
  return {
    type: type.GET_AUTH,
    payload: data
  };
};

export const closeDialog = () => {
  return {
    type: type.CLOSE_DIALOG
  };
};

export const searchUser = query => {
  return {
    type: type.SEARCH,
    payload: query
  };
};
