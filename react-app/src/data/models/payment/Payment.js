import { z } from "zod";

// TODO(production-schema):
// - support multiple providers (Stripe/UPI/Wallet/COD)
// - capture/refund events history
// - audit fields and soft delete

export const PaymentSchema = z.object({
  id: z.union([z.string(), z.number()]).transform((v) => String(v)),
  orderId: z.string(),
  amount: z.number().nonnegative(),
  currency: z.string().default("USD"),
  status: z
    .enum(["pending", "authorized", "captured", "failed", "refunded"])
    .default("pending"),
  method: z.enum(["card", "upi", "wallet", "cod"]).default("card"),
  provider: z.string().optional().nullable(),
  providerPaymentId: z.string().optional().nullable(),
  createdAt: z.union([z.string(), z.date()]).transform((v) => new Date(v)),
  updatedAt: z.union([z.string(), z.date()]).transform((v) => new Date(v)),
});

export function parsePayment(input) {
  return PaymentSchema.parse(input);
}

export class Payment {}
