/* @vitest-environment jsdom */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { RazorpayService } from "./RazorpayService";

describe("RazorpayService", () => {
  const originalCreateElement = document.createElement.bind(document);
  let createSpy;
  let appendSpy;

  beforeEach(() => {
    appendSpy = vi
      .spyOn(document.body, "appendChild")
      .mockImplementation(() => {});
    createSpy = vi
      .spyOn(document, "createElement")
      .mockImplementation((tag) => {
        if (tag === "script") {
          const el = { onload: null, onerror: null };
          Object.defineProperty(el, "src", {
            set() {
              queueMicrotask(() => el.onload && el.onload());
            },
          });
          return el;
        }
        return originalCreateElement(tag);
      });
  });

  afterEach(() => {
    createSpy.mockRestore();
    appendSpy.mockRestore();
    // @ts-ignore
    delete window.Razorpay;
  });

  it("init loads SDK and resolves", async () => {
    const res = await RazorpayService.init("rzp_test_key");
    expect(res).toEqual({ loaded: true, publicKey: "rzp_test_key" });
    expect(createSpy).toHaveBeenCalledWith("script");
  });

  it("openCheckout resolves on handler call", async () => {
    window.Razorpay = function (opts) {
      this.open = () => {
        queueMicrotask(() => opts.handler({ razorpay_payment_id: "pay_123" }));
      };
    };
    const result = await RazorpayService.openCheckout({
      key: "k",
      amount: 100,
      currency: "INR",
      name: "Test",
      order_id: "order_123",
    });
    expect(result.status).toBe("succeeded");
    expect(result.response).toMatchObject({ razorpay_payment_id: "pay_123" });
  });
});
