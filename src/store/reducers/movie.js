import * as type from "../constant/actionType";

const initialState = {
  movies: [],
  movie: {},
  historyBook: []
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case type.LIST_MOVIE:
      state.movies = [...action.payload];
      return {
        ...state
      };

    case type.MOVIE:
      // console.log(action);
      state.movie = { ...action.payload };
      return { ...state };

    case type.GET_HISTORY_BOOK:
      // console.log(action);
      return { ...state, historyBook: [...action.payload.DanhSachVeDaDat] };
    default:
      return { ...state };
  }
};
export default movie;
