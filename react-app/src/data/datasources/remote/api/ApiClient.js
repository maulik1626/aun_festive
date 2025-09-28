import axios from "axios";
import { setupInterceptors } from "./ApiInterceptor.js";

const baseURL = import.meta.env.VITE_API_BASE_URL || "";

export const ApiClient = axios.create({
  baseURL,
  timeout: 15000,
});

setupInterceptors(ApiClient, {
  getAuthToken: () => null,
  maxRetries: 3,
  retryDelayMs: 2000,
});
