import { combineReducers } from "redux";
import { AuthenticationReducer } from "./authentication_reducer";

export default combineReducers({
  authentication: AuthenticationReducer
});
