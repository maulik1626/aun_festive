// Minimal Razorpay web SDK integration placeholder
// TODO: Replace with real Razorpay Checkout integration and backend order creation

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve(true);
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

export const RazorpayService = {
  async init(publicKey) {
    await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    return { loaded: true, publicKey };
  },

  async openCheckout(options) {
    // options: { key, amount, currency, name, order_id, prefill, notes, theme }
    if (!window.Razorpay) throw new Error("Razorpay SDK not loaded");
    return new Promise((resolve, reject) => {
      const rzp = new window.Razorpay({
        ...options,
        handler: (response) => resolve({ status: "succeeded", response }),
        modal: {
          ondismiss: () => reject(new Error("Payment dismissed")),
        },
      });
      rzp.open();
    });
  },
};
