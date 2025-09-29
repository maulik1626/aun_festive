/* @vitest-environment jsdom */
import { describe, it, expect } from "vitest";
import { NotificationService } from "./NotificationService";

class MockNotification {
  static permission = "granted";
  static async requestPermission() {
    return "granted";
  }
  constructor(title, options) {
    // store created notification for assertions
    window.__lastNotification = { title, options };
  }
}

// @ts-ignore
globalThis.Notification = MockNotification;

describe("NotificationService", () => {
  it("requests permission and returns granted", async () => {
    const res = await NotificationService.requestPermission();
    expect(res).toBe("granted");
  });

  it("shows a notification when granted", () => {
    NotificationService.show("Hello", { body: "World" });
    expect(window.__lastNotification).toMatchObject({
      title: "Hello",
      options: { body: "World" },
    });
  });
});
