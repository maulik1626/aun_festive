import { describe, it, expect, vi } from "vitest";
import { IpLocationService } from "./IpLocationService";

vi.mock("@data/datasources/remote/location/LocationApiDataSource", () => ({
  LocationApiDataSource: {
    ipLookup: vi.fn(async () => ({ latitude: 1, longitude: 2, accuracy: 100 })),
  },
}));

describe("IpLocationService", () => {
  it("returns result from datasource", async () => {
    const res = await IpLocationService.lookup();
    expect(res).toMatchObject({ latitude: 1, longitude: 2, accuracy: 100 });
  });
});
