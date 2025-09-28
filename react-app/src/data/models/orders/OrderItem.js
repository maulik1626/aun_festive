import { z } from "zod";

export const OrderItemSchema = z.object({
  productId: z.union([z.string(), z.number()]).transform((v) => String(v)),
  title: z.string().min(1),
  quantity: z.number().int().positive(),
  unitPrice: z.number().nonnegative(),
});

export function parseOrderItem(input) {
  return OrderItemSchema.parse(input);
}

export class OrderItem {}
