// NOTE: For web, true secure storage needs platform APIs. This is a light wrapper.
const PREFIX = "secure:";

export const SecureStorage = {
  get(key) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw ? atob(raw) : null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, btoa(String(value ?? "")));
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch {}
  },
};
