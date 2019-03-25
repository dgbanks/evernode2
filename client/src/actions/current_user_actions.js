import { User } from "utils/api";
import { currentUserActions } from "constants/action_types";

const {
  CURRENT_USER_REQUEST,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAILURE
} = currentUserActions;

const userRequest = () => ({ type: CURRENT_USER_REQUEST });
const userSuccess = user => ({ type: CURRENT_USER_SUCCESS, user });
const userFailure = () => ({ type: CURRENT_USER_FAILURE });

export const fetchCurrentUser = () => dispatch => {
  dispatch(userRequest());
  User.fetch()
    .then(res => dispatch(userSuccess(res.data.user)))
    .catch(res => dispatch(userFailure()))
};
