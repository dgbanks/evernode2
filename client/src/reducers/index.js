import { combineReducers } from "redux";
import AuthenticationReducer from "./authentication_reducer";
import CanvasesReducer from "./canvases_reducer";
import CurrentUserReducer from "./current_user_reducer";
import UIReducer from "./ui_reducer";

export default combineReducers({
  authentication: AuthenticationReducer,
  canvases: CanvasesReducer,
  currentUser: CurrentUserReducer,
  ui: UIReducer
});
