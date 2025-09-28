function emptyCart() {
  return {
    id: "dev-cart",
    items: [],
    currency: "USD",
    subtotal: 0,
    discounts: 0,
    tax: 0,
    shipping: 0,
    total: 0,
    updatedAt: new Date().toISOString(),
  };
}

export const CartApiDataSource = {
  async get() {
    return emptyCart();
  },
  async addItem(productId, quantity = 1) {
    return emptyCart();
  },
  async removeItem(productId) {
    return emptyCart();
  },
  async updateItem(productId, quantity) {
    return emptyCart();
  },
  async clear() {
    return emptyCart();
  },
};
