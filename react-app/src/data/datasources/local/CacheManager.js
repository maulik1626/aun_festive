import { LocalStorageManager } from "./LocalStorageManager";

export const CacheManager = {
  get(key) {
    const record = LocalStorageManager.get(`cache:${key}`);
    if (!record) return null;
    const { value, expiresAt } = record;
    if (expiresAt && Date.now() > expiresAt) {
      LocalStorageManager.remove(`cache:${key}`);
      return null;
    }
    return value ?? null;
  },
  set(key, value, ttlMs) {
    const expiresAt = ttlMs ? Date.now() + ttlMs : null;
    LocalStorageManager.set(`cache:${key}`, { value, expiresAt });
  },
  remove(key) {
    LocalStorageManager.remove(`cache:${key}`);
  },
  clear() {
    LocalStorageManager.clearAll();
  },
};
