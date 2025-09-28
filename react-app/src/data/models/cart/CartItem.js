import { z } from "zod";

export const CartItemSchema = z.object({
  productId: z.union([z.string(), z.number()]).transform((v) => String(v)),
  quantity: z.number().int().positive(),
  unitPrice: z.number().nonnegative(),
});

export function parseCartItem(input) {
  return CartItemSchema.parse(input);
}

export class CartItem {}
