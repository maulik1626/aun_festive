import { z } from "zod";

// TODO(production-schema):
// - status: draft/published/archived
// - inventoryPolicy: allowBackorder/deny
// - weight/dimensions for shipping
// - variants support (size/color/options)
// - SEO: metaTitle/metaDescription/ogImage
// - rating/reviewsCount
// - taxCategory / taxInclusive
// - vendor/brandId

export const ProductSchema = z.object({
  id: z.union([z.string(), z.number()]).transform((v) => String(v)),
  title: z.string().min(1),
  slug: z.string().min(1),
  price: z.number().nonnegative(),
  compareAtPrice: z.number().nonnegative().optional().nullable(),
  currency: z.string().default("USD"),
  images: z.array(z.string().url()).default([]),
  thumbnailUrl: z.string().url().optional().nullable(),
  description: z.string().optional().default(""),
  attributes: z.record(z.string(), z.any()).default({}),
  categoryId: z.union([z.string(), z.number()]).optional().nullable(),
  stock: z.number().int().nonnegative().optional().nullable(),
  sku: z.string().optional().nullable(),
  tags: z.array(z.string()).default([]),
  createdAt: z.union([z.string(), z.date()]).transform((v) => new Date(v)),
  updatedAt: z.union([z.string(), z.date()]).transform((v) => new Date(v)),
});

export function parseProduct(input) {
  return ProductSchema.parse(input);
}

export class Product {}
