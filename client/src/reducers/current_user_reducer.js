import { authenticationActions, currentUserActions } from "constants/action_types";

const state = { data: null, fetching: false };

export default (prevState = state, { user, type }) => {
  Object.freeze(prevState);
  switch (type) {
    case currentUserActions.CURRENT_USER_REQUEST:
      return Object.assign({}, prevState, { fetching: true });
    case currentUserActions.CURRENT_USER_SUCCESS:
      return { data: user.data, fetching: false };
    case currentUserActions.CURRENT_USER_FAILURE:
      return prevState;
    case authenticationActions.LOGOUT:
      return { data: null, fetching: false };
    default:
      return prevState;
  }
};
