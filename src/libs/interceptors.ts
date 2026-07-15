import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// Request interceptor to attach tokens or headers
export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  // Future implementation: Attach Authorization token here
  // const token = localStorage.getItem("token");
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
};

export const requestErrorInterceptor = (error: AxiosError) => {
  console.error("API Request Error:", error);
  return Promise.reject(error);
};

// Response interceptor to handle data or centralized errors
export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseErrorInterceptor = (error: AxiosError) => {
  // Centralized error handling
  if (error.response?.status === 401) {
    // Handle unauthorized errors (e.g., redirect to login or refresh token)
    console.warn("Unauthorized access - maybe redirect to login?");
  } else {
    console.error("API call failed: ", error.response?.data || error.message);
  }
  return Promise.reject(error);
};
