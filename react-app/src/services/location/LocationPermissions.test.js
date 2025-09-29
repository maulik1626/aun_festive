/* @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { LocationPermissions } from "./LocationPermissions";

describe("LocationPermissions", () => {
  it("returns prompt when permissions API missing", async () => {
    const original = navigator.permissions;
    // @ts-ignore
    delete navigator.permissions;
    const state = await LocationPermissions.query();
    expect(state).toBe("prompt");
    // @ts-ignore
    navigator.permissions = original;
  });

  it("returns granted from permissions API", async () => {
    const original = navigator.permissions;
    // @ts-ignore
    navigator.permissions = {
      query: async () => ({ state: "granted" }),
    };
    const state = await LocationPermissions.query();
    expect(state).toBe("granted");
    // @ts-ignore
    navigator.permissions = original;
  });
});
