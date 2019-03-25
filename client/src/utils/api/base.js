import axios from "axios";
import { authToken } from "utils/auth_token";

const config = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": authToken
  }
});

export const destroy = config.delete;
export const { post, get, put } = config;
