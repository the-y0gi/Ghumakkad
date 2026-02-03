// src/api/superAdminAxios.js
import axios from "axios";

const superAdminAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Interceptor to add Bearer token
superAdminAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token && token !== "undefined") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default superAdminAxios;
