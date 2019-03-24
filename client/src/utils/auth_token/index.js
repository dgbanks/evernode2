export const authToken = localStorage.getItem("evernodeToken");
export const decodedTokenPayload = JSON.parse(window.atob(authToken.split(".")[1]));
