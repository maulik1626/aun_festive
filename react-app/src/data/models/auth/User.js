import { z } from "zod";

const E164 = /^\+?[1-9]\d{6,14}$/;

// TODO(production-schema):
// - passwordHash / authProvider / providerId (if using OAuth)
// - emailVerified / mobileVerified
// - lastLoginAt / lastActiveAt
// - addressBook: normalized addresses
// - preferences/settings: JSON blob
// - deletedAt (soft delete) and isDeleted flag
// - createdBy/updatedBy (audit)

export const UserSchema = z.object({
  id: z.union([z.string(), z.number()]).transform((v) => String(v)),
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email()
    .transform((v) => v.toLowerCase())
    .optional()
    .nullable(),
  mobileNumber: z
    .string()
    .regex(E164, "Invalid phone number format")
    .optional()
    .nullable(),
  roles: z.array(z.string()).default([]),
  avatarUrl: z.string().url().optional().nullable(),
  isActive: z.boolean().default(true),
  createdAt: z.union([z.string(), z.date()]).transform((v) => new Date(v)),
  updatedAt: z.union([z.string(), z.date()]).transform((v) => new Date(v)),
});

export function parseUser(input) {
  return UserSchema.parse(input);
}

export class User {}
