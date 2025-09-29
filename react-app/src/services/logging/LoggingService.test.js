import { describe, it, expect, vi } from "vitest";
import { LoggingService } from "./LoggingService";

describe("LoggingService", () => {
  it("logs to console", () => {
    const info = vi.spyOn(console, "info").mockImplementation(() => {});
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    LoggingService.info("a", { x: 1 });
    LoggingService.warn("b", { y: 2 });
    LoggingService.error(new Error("c"), { z: 3 });
    expect(info).toHaveBeenCalled();
    expect(warn).toHaveBeenCalled();
    expect(error).toHaveBeenCalled();
    info.mockRestore();
    warn.mockRestore();
    error.mockRestore();
  });
});
