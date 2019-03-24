import { Authentication } from "utils/api";
import { authenticationActions } from "constants/action_types";
const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} = authenticationActions;

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, user });
const loginFailure = () => ({ type: LOGIN_FAILURE });
const logoutUser = () => ({ type: LOGOUT });

export const login = code => dispatch => {
  dispatch(loginRequest());
  Authentication.login({ code })
    .then(res => dispatch(loginSuccess(res.data.user)))
    .catch(res => dispatch(loginFailure()))
};

export const logout = () => dispatch => {
  dispatch(logoutUser());
  Authentication.logout();
}
