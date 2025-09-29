/* @vitest-environment jsdom */
import { describe, it, expect, vi } from "vitest";
import { AnalyticsService } from "./AnalyticsService";

describe("AnalyticsService", () => {
  it("track does not throw", () => {
    const spy = vi.spyOn(console, "debug").mockImplementation(() => {});
    expect(() =>
      AnalyticsService.track("test_event", { foo: "bar" })
    ).not.toThrow();
    spy.mockRestore();
  });
});
