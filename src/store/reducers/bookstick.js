import * as type from "../constant/actionType";

const initialState = {
  id: null,
  bookSticker: [],
  available: 0,
  reserved: 0,
  seat: [],
  isBookSeat: false
};

const bookstick = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_DETAIL_BOOK:
      // console.log(action);
      return {
        ...state,
        id: action.payload.MaLichChieu,
        bookSticker: [...action.payload.DanhSachGhe],
        available: action.payload.DanhSachGhe.filter(item => !item.DaDat)
          .length,
        reserved: 0,
        seat: [],
        isBookSeat: false
      };

    case type.GET_ITEM:
      // console.log(action);
      const { payload, status } = action;

      if (status) {
        return {
          ...state,
          reserved: state.reserved + 1,
          available: state.available - 1,
          isBookSeat: true,
          seat: state.seat.concat({
            MaGhe: payload.MaGhe,
            GiaVe: payload.GiaVe
          })
        };
      } else {
        return {
          ...state,
          reserved: state.reserved - 1,
          available: state.available + 1,
          isBookSeat: false,
          seat: state.seat.filter(item => item.MaGhe !== payload.MaGhe)
        };
      }

    case type.BOOK_STICKET:
      return state;

    default:
      return state;
  }
};

export default bookstick;
