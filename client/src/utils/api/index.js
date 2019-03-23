import { post, get, put, destroy } from "./base";

export const Auth = {
  login: (params) => post("/login", params)
};

export const User = {
  fetch: () => get()
}
