export const ENDPOINTS = {
  products: {
    list: "/products",
    detail: (id) => `/products/${id}`,
  },
  auth: {
    login: "/auth/login",
    profile: "/auth/profile",
  },
};
