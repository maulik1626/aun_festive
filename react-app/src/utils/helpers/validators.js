export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").toLowerCase());
}

export function isE164Phone(value) {
  return /^\+?[1-9]\d{6,14}$/.test(String(value || ""));
}
