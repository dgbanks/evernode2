import { authenticationActions } from "constants/action_types";

const state = {
  currentUser: null,
  fetching: !localStorage.getItem("evernodeToken"),
}

export const AuthenticationReducer = (prevState = state, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case authenticationActions.LOGIN_REQUEST:
      debugger
      return prevState;
    case authenticationActions.LOGIN_SUCCESS:
      debugger
      return prevState;
    case authenticationActions.LOGIN_FAILURE:
      debugger
      return prevState;
    default:
      return prevState;
  }
};
