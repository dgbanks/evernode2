import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "reducers";

export default createStore(
  RootReducer,
  applyMiddleware(thunk, logger)
);
