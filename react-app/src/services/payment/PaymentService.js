export const PaymentService = {
  async createPaymentIntent(order) {
    // TODO: call backend to create payment intent for provider
    return { clientSecret: "dev-secret" };
  },
};
