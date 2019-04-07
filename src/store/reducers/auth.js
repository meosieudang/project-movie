import * as type from "../constant/actionType";

const data = JSON.parse(localStorage.getItem("user"));
const initialState = data
  ? {
      user: data,
      err: null,
      errSignUp: null
    }
  : {
      user: null,
      err: null,
      errSignUp: null
    };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_SUCCESS:
      // console.log(action);
      const { payload } = action;
      if (payload !== "Tài khoản hoặc mật khẩu không đúng !") {
        localStorage.setItem("user", JSON.stringify(payload));
        state = { ...state, user: payload, err: null, errSignUp: null };
      } else {
        state = { ...state, user: null, err: payload, errSignUp: null };
      }
      return { ...state };

    case type.LOGOUT_SUCCESS:
      localStorage.removeItem("user");
      state = { ...state, user: null, err: null, errSignUp: null };
      return { ...state };

    case type.SIGNUP_SUCCESS:
      if (action.payload !== "Tài khoản đã tồn tại") {
        localStorage.setItem("user", JSON.stringify(action.payload));
        state = { user: action.payload, err: null, errSignUp: null };
      } else {
        state = { user: null, err: null, errSignUp: action.payload };
      }
      return { ...state };
    default:
      return state;
  }
};
export default auth;
