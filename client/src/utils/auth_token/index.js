export const authToken = localStorage.getItem("evernodeToken");
export const setToken = token => localStorage.setItem("evernodeToken", token);
export const removeToken = () => localStorage.removeItem("evernodeToken");
// export const decodedTokenPayload = authToken && JSON.parse(window.atob(authToken.split(".")[1]));
