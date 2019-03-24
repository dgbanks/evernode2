import { authenticationActions } from "constants/action_types";

const state = {
  currentUser: null,
  fetching: !localStorage.getItem("evernodeToken"),
}

export const AuthenticationReducer = (prevState = state, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case authenticationActions.LOGIN_REQUEST:
      return { currentUser: null, fetching: true };
    case authenticationActions.LOGIN_SUCCESS:
      return { currentUser: action.user, fetching: false };
    case authenticationActions.LOGIN_FAILURE:
      return { currentUser: null, fetching: false };
    case authenticationActions.LOGOUT:
      return { currentUser: null, fetching: false };
    default:
      return prevState;
  }
};
