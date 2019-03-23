import axios from "axios";

const config = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("evernodeToken")
  }
});

export const destroy = config.delete;
export const { post, get, put } = config;
