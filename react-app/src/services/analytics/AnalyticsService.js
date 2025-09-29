export const AnalyticsService = {
  init() {},
  track(event, props) {
    // TODO: integrate with a real provider
    if (import.meta.env.DEV) console.debug("analytics", event, props);
  },
};
