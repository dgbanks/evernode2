import { post, get, put, destroy } from "./base";

export const User = {
  login: params => post("/login", params),
  fetch: id => get(`/users/${id}`),
};
