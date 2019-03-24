import { authenticationActions } from "constants/action_types";

export const AuthenticationReducer = (prevState = {}, { user, type }) => {
  Object.freeze(prevState);
  switch (type) {
    case authenticationActions.LOGIN_REQUEST:
      return Object.assign({}, prevState, { fetching: true });
    case authenticationActions.LOGIN_SUCCESS:
      return { currentUser: user, authenticated: true, fetching: false};
    case authenticationActions.LOGIN_FAILURE:
      return Object.assign({}, prevState, { fetching: false });
    case authenticationActions.LOGOUT:
      return { currentUser: null, authenticated: false, fetching: false };
    default:
      return prevState;
  }
};
