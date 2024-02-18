import axios from "axios";

// const BASE_URL = "http://10.0.2.2:3000/";
// const BASE_URL = "http://192.168.12.30:8080/api/v1/";
const BASE_URL = "https://quiz-backend-axoq.onrender.com/api/v1/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
