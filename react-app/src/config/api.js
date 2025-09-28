const baseURL = import.meta.env.VITE_API_BASE_URL || '';

export const API = {
  baseURL,
  endpoints: {}
};

export function getApiBaseUrl() {
  return baseURL;
}
