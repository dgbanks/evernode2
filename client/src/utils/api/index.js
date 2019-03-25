import { post, get, put, destroy } from "./base";
import { setToken, removeToken } from "utils/auth_token";

export const Authentication = {
  login: params => post("/login", params).then(response => {
    response.status === 200 && setToken(response.data.auth_token);
    return response;
  }),
  logout: () => removeToken()
};

export const User = {
  fetch: () => get(`/users/currentUser`),
}
