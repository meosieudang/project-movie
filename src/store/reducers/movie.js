import * as type from "../constant/actionType";

const initialState = {
  movies: [],
  movie: {},
  historyBook: [],
  movieEdit: {}
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

    case type.GET_MOVIE_EDIT:
      return { ...state, movieEdit: action.payload };

    case type.CLEAR_ERROR:
      return {
        ...state,
        movieEdit: {}
      };

    case type.UPDATE_MOVIE_SUCCESS:
      const tempMovies = state.movies.filter(
        item => item.MaPhim !== action.payload.MaPhim
      );
      return {
        ...state,
        movies: [action.payload, ...tempMovies]
      };
    default:
      return { ...state };
  }
};
export default movie;
