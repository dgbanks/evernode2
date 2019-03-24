import { combineReducers } from "redux";
import AuthenticationReducer from "./authentication_reducer";
import CurrentUserReducer from "./current_user_reducer";

export default combineReducers({
  authentication: AuthenticationReducer,
  currentUser: CurrentUserReducer
});
