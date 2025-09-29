/* @vitest-environment jsdom */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { LocationManager } from "./LocationManager";

vi.mock("./GeolocationService", () => ({
  GeolocationService: {
    getCurrentPosition: vi.fn(async () => ({
      latitude: 11,
      longitude: 22,
      accuracy: 33,
    })),
  },
}));

vi.mock("./IpLocationService", () => ({
  IpLocationService: {
    lookup: vi.fn(async () => ({ latitude: 44, longitude: 55, accuracy: 66 })),
  },
}));

describe("LocationManager", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns gps when available", async () => {
    const res = await LocationManager.detect();
    expect(res.type).toBe("gps");
    expect(res).toMatchObject({ latitude: 11, longitude: 22 });
  });

  it("falls back to ip when gps throws", async () => {
    const { GeolocationService } = await import("./GeolocationService");
    GeolocationService.getCurrentPosition.mockRejectedValueOnce(
      new Error("no gps")
    );
    const res = await LocationManager.detect();
    expect(res.type).toBe("ip");
    expect(res).toMatchObject({ latitude: 44, longitude: 55 });
  });
});
