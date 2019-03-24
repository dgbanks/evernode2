import { post, get, put, destroy } from "./base";

export const Authentication = {
  login: params => {
    return post("/login", params).then(response => {
    if (response.status === 200) {
      localStorage.setItem("evernodeToken", response.data.auth_token);
    }
    return response;
  })},
  logout: () => localStorage.removeItem("evernodeToken")
};

export const User = {
  fetch: () => get(`/users/currentUser`),
}
