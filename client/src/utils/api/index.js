import { post, get, put, destroy } from "./base";

export const Authentication = {
  login: params => post("/login", params).then(response => {
    const { status, data: { auth_token} } = response;
    status === 200 && localStorage.setItem("evernodeToken", auth_token);
    return response;
  }),
  logout: () => localStorage.removeItem("evernodeToken")
};

export const Canvases = {
  create: params => post("/canvases", params),
  fetch: id => get(`/canvases/${id}`),
  update: (id, params) => put(`/canvases/${id}`, params),
  destroy: id => destroy(`/canvases/${id}`),
};

export const User = {
  fetch: () => get(`/users/current_user`),
};
