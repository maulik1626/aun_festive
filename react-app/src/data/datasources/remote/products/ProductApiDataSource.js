import { ApiClient } from "@data/datasources/remote/api/ApiClient";
import { ENDPOINTS } from "@data/datasources/remote/api/endpoints";

export const ProductApiDataSource = {
  async list(params = {}) {
    const res = await ApiClient.get(ENDPOINTS.products.list, { params });
    return res.data;
  },
  async detail(id) {
    const res = await ApiClient.get(ENDPOINTS.products.detail(id));
    return res.data;
  },
};
