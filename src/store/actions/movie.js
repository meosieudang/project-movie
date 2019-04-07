import * as type from "../constant/actionType";
import axios from "axios";

export const getListMovieRequest = () => dispatch => {
  return axios
    .get("http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP07")
    .then(res => dispatch(getListMovie(res.data)))
    .catch(err => console.log(err));
};

export const getListMovie = data => {
  return {
    type: type.LIST_MOVIE,
    payload: data
  };
};

export const getMovieRequest = id => dispatch => {
  return axios
    .get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`)
    .then(res => dispatch(getMovie(res.data)))
    .catch(err => console.log(err));
};

export const getMovie = movie => {
  return {
    type: type.MOVIE,
    payload: movie
  };
};

export const getHistoryBookRequest = username => dispatch => {
  return axios
    .post(
      `http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${username}`
    )
    .then(res => dispatch(getHistoryBook(res.data)))
    .catch(err => console.log(err));
};

export const getHistoryBook = data => {
  return {
    type: type.GET_HISTORY_BOOK,
    payload: data
  };
};
