const NAMESPACE = "aun_festive";

function ns(key) {
  return `${NAMESPACE}:${key}`;
}

export const LocalStorageManager = {
  get(key) {
    try {
      const raw = localStorage.getItem(ns(key));
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(ns(key), JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(ns(key));
    } catch {}
  },
  clearAll() {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith(`${NAMESPACE}:`))
        .forEach((k) => localStorage.removeItem(k));
    } catch {}
  },
};
