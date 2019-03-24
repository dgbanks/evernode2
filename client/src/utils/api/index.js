import { post, get, put, destroy } from "./base";

export const Authentication = {
  login: params => post("/login", params),
  logout: () => localStorage.removeItem("evernodeToken") // not an API
};

export const User = {
  fetch: id => get(`/users/${id}`),
}
