import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.themoviedb.org/3/movie';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`, 
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.params = {
      ...config.params,
      api_key: API_KEY, 
    };
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
