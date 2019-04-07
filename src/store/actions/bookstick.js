import * as type from "../constant/actionType";
import axios from "axios";

export const getDetailBookRequest = id => dispatch => {
  return axios
    .get(
      `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${id}`
    )
    .then(res => dispatch(getDetailBook(res.data)))
    .catch(err => console.log(err));
};

export const getDetailBook = data => {
  return {
    type: type.GET_DETAIL_BOOK,
    payload: data
  };
};

export const getItem = (data, boolean) => {
  return {
    type: type.GET_ITEM,
    payload: data,
    status: boolean
  };
};

export const bookSticketRequest = data => dispatch => {
  return axios({
    method: "POST",
    url: "http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe",
    data: data
  })
    .then(res => dispatch(bookSticket(res.data)))
    .catch(err => console.log(err));
};

export const bookSticket = newBook => {
  return {
    type: type.BOOK_STICKET,
    payload: newBook
  };
};
