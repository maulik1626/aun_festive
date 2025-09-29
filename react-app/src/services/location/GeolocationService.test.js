/* @vitest-environment jsdom */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { GeolocationService } from "./GeolocationService";

describe("GeolocationService", () => {
  const originalGeo = navigator.geolocation;

  beforeEach(() => {
    // @ts-ignore
    navigator.geolocation = {
      getCurrentPosition: vi.fn((success, error) => {
        success({
          coords: { latitude: 12.34, longitude: 56.78, accuracy: 50 },
        });
      }),
    };
  });

  afterEach(() => {
    // @ts-ignore
    navigator.geolocation = originalGeo;
  });

  it("resolves with lat/lng/accuracy", async () => {
    const res = await GeolocationService.getCurrentPosition();
    expect(res).toMatchObject({
      latitude: 12.34,
      longitude: 56.78,
      accuracy: 50,
    });
  });

  it("rejects when unsupported", async () => {
    // @ts-ignore
    navigator.geolocation = undefined;
    await expect(GeolocationService.getCurrentPosition()).rejects.toThrow(
      "Geolocation unsupported"
    );
  });
});
