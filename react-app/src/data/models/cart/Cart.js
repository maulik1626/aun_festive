import { z } from "zod";
import { CartItemSchema } from "./CartItem";

// TODO(production-schema):
// - status: active/abandoned/converted
// - discountCodes/appliedPromotions structure
// - expiresAt for stale cart cleanup
// - notes/gift messages per line item

export const CartSchema = z.object({
  id: z.union([z.string(), z.number()]).transform((v) => String(v)),
  items: z.array(CartItemSchema).default([]),
  currency: z.string().default("USD"),
  subtotal: z.number().nonnegative().default(0),
  discounts: z.number().nonnegative().default(0),
  tax: z.number().nonnegative().default(0),
  shipping: z.number().nonnegative().default(0),
  total: z.number().nonnegative().default(0),
  updatedAt: z.union([z.string(), z.date()]).transform((v) => new Date(v)),
});

export function parseCart(input) {
  return CartSchema.parse(input);
}

export class Cart {}
