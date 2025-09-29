export const LocationPermissions = {
  async query() {
    if (!navigator.permissions) return "prompt";
    try {
      const res = await navigator.permissions.query({ name: "geolocation" });
      return res.state; // 'granted' | 'denied' | 'prompt'
    } catch {
      return "prompt";
    }
  },
};
