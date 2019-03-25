import { authenticationActions } from "constants/action_types";

const state = { isAuthenticated: !!localStorage.getItem("evernodeToken") };

export default (prevState = state, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case authenticationActions.LOGIN_REQUEST:
      return Object.assign({}, prevState, { authenticating: true });
    case authenticationActions.LOGIN_SUCCESS:
      return { isAuthenticated: true, authenticating: false };
    case authenticationActions.LOGIN_FAILURE:
      return Object.assign({}, prevState, { authenticating: false });
    case authenticationActions.LOGOUT:
      return { isAuthenticated: false, authenticating: false };
    default:
      return prevState;
  }
};
