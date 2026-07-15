import axios from "axios";
import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor,
} from "./interceptors";

// Use the environment variable, fallback to localhost if missing (graceful handling)
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  console.warn("NEXT_PUBLIC_API_BASE_URL is not defined in the environment. Falling back to default URL.");
}

const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Apply request interceptors
apiClient.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

// Apply response interceptors
apiClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default apiClient;
