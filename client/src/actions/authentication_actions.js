import { Authentication } from "utils/api";
import { authenticationActions } from "constants/action_types";

const loginRequest = () => ({
  type: authenticationActions.LOGIN_REQUEST
})

const loginSuccess = user => ({
  type: authenticationActions.LOGIN_SUCCESS,
  user
})

export const login = code => dispatch => {
  dispatch(loginRequest());
  Authentication.login({ code }).then(({ data }) => (
    dispatch(loginSuccess(data)))
  )
};
