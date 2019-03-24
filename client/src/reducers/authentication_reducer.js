import { authenticationActions } from "constants/action_types";

export default (prevState = {}, action) => {
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
