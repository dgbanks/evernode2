import { combineReducers } from "redux";
import AuthenticationReducer from "./authentication_reducer";
import CurrentUserReducer from "./current_user_reducer";
import UIReducer from "./ui_reducer";

export default combineReducers({
  authentication: AuthenticationReducer,
  currentUser: CurrentUserReducer,
  ui: UIReducer
});
