import { combineReducers } from "redux";
import auth from "./auth";
import movie from "./movie";
import bookstick from "./bookstick";
import user from "./Admin/user";

const rootReducer = combineReducers({
  auth,
  movie,
  bookstick,
  user
});

export default rootReducer;
