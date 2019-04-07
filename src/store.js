import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./store/reducers/rootReducer";

const initialState = {};
const middleware = [thunk];
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    composeEnhancers
  )
);

export default store;
