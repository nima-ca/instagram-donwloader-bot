import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Create Axios Instance
const createAxiosInstance = (): AxiosInstance =>
  axios.create({
    baseURL: "https://api.publicapis.org/",
  });

// Handle API
const api = (axios: AxiosInstance) => ({
  get: <T>(url: string, config: AxiosRequestConfig = {}) => {
    return axios.get<T>(url, config);
  },
  delete: <T>(url: string, config: AxiosRequestConfig = {}) => {
    return axios.delete<T>(url, config);
  },
  post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
    return axios.post<T>(url, body, config);
  },
  patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
    return axios.patch<T>(url, body, config);
  },
  put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
    return axios.put<T>(url, body, config);
  },
  defaults: axios.defaults,
});

export default api(createAxiosInstance());
