import * as type from "../../constant/actionTypeAdmin";

const initialState = {
  users: [],
  createUser: null,
  messageErr: null,
  userEdit: null,
  getAuth: [],
  search: [],
  isAuthenticated: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_LIST_USER:
      return {
        ...state,
        users: [...action.payload],
        createUser: null,
        messageErr: null,
        userEdit: null,
        search: []
      };

    case type.CREATE_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
        messageErr: null,
        isAuthenticated: true
      };

    case type.CREATE_USER_ERROR:
      return { ...state, messageErr: action.payload, isAuthenticated: false };

    case type.DELETE_USER:
      // console.log(action);
      return {
        ...state,
        users: state.users.filter(
          item => item.TaiKhoan !== action.userDelete.TaiKhoan
        )
      };

    case type.GET_USER:
      // console.log(action);
      return { ...state, userEdit: action.payload };

    case type.EDIT_USER:
      console.log(action);
      const tempUsers = state.users.filter(
        item => item.TaiKhoan !== action.payload.TaiKhoan
      );
      return {
        ...state,
        users: [action.payload, ...tempUsers]
      };

    case type.GET_AUTH:
      return { ...state, getAuth: [...action.payload] };

    case type.CLOSE_DIALOG:
      return {
        ...state,
        userEdit: null,
        messageErr: null,
        isAuthenticated: false
      };

    case type.SEARCH:
      // console.log(action);
      const tempUsersSearch = [...state.users];
      return {
        ...state,
        search: tempUsersSearch.filter(task => {
          return (
            task.TaiKhoan.toLowerCase().indexOf(
              action.payload.toLowerCase().trim()
            ) !== -1
          );
        })
      };
    default:
      return state;
  }
};

export default user;
