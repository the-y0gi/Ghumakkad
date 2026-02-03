// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = (token) =>
  axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default axiosInstance;
