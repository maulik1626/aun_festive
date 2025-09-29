export const NotificationService = {
  async requestPermission() {
    if (!("Notification" in window)) return "unsupported";
    try {
      const res = await Notification.requestPermission();
      return res;
    } catch {
      return "denied";
    }
  },
  show(title, options) {
    if (Notification.permission === "granted") new Notification(title, options);
  },
};
