export const OrderApiDataSource = {
  async list() {
    return [];
  },
  async detail(id) {
    return {
      id: String(id),
      status: "unfulfilled",
      total: 0,
      createdAt: new Date().toISOString(),
    };
  },
  async create(payload) {
    return { id: "new-order", ...payload };
  },
};
