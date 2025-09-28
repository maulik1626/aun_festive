import { z } from "zod";

// TODO(production-schema):
// - type: 'Point' (GeoJSON-compatible)
// - address (full text), placeId (maps provider)
// - isDefault flag for address book
// - geohash for geo-queries

export const LocationSchema = z.object({
  latitude: z.number().refine((v) => Math.abs(v) <= 90, "Invalid latitude"),
  longitude: z.number().refine((v) => Math.abs(v) <= 180, "Invalid longitude"),
  accuracy: z.number().nonnegative().optional().nullable(),
});

export function parseLocation(input) {
  return LocationSchema.parse(input);
}

export class Location {}
