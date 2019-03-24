import { authenticationActions, currentUserActions } from "constants/action_types";

const state = { data: null, fetching: false };

export default (prevState = state, { user, type }) => {
  Object.freeze(prevState);
  switch (type) {
    case currentUserActions.CURRENT_USER_REQUEST:
      return Object.assign({}, prevState, { fetching: true });
    case currentUserActions.CURRENT_USER_SUCCESS:
      return { data: user, fetching: false };
    case currentUserActions.CURRENT_USER_FAILURE:
      return prevState;
    case authenticationActions.LOGOUT:
      return prevState;
    default:
      return prevState;
  }
};
