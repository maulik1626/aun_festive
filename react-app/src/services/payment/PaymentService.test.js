import { describe, it, expect } from "vitest";
import { PaymentService } from "./PaymentService";

describe("PaymentService", () => {
  it("createPaymentIntent returns dev secret", async () => {
    const res = await PaymentService.createPaymentIntent({ id: "order_1" });
    expect(res).toEqual({ clientSecret: "dev-secret" });
  });
});
