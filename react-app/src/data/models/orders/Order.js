import { z } from "zod";

// TODO(production-schema):
// - orderNumber (human-friendly)
// - customerId reference
// - shippingAddress/billingAddress (normalized)
// - paymentStatus/method details
// - fulfillmentStatus and tracking ids
// - refunds/adjustments history
// - notes/instructions
// - audit trail (who changed status)

export const OrderSchema = z.object({
  id: z.union([z.string(), z.number()]).transform((v) => String(v)),
  status: z.string(),
  total: z.number().nonnegative(),
  createdAt: z.union([z.string(), z.date()]).transform((v) => new Date(v)),
});

export function parseOrder(input) {
  return OrderSchema.parse(input);
}

export class Order {}
