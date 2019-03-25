import { post, get, put, destroy } from "./base";

export const Authentication = {
  login: params => post("/login", params).then(response => {
    const { status, data: { auth_token} } = response;
    status === 200 && localStorage.setItem("evernodeToken", auth_token);
    return response;
  }),
  logout: () => localStorage.removeItem("evernodeToken")
};

export const User = {
  fetch: () => get(`/users/currentUser`),
}
