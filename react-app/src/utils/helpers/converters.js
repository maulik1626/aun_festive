export function toNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export function toBoolean(value) {
  if (typeof value === "boolean") return value;
  const v = String(value || "").toLowerCase();
  return v === "true" || v === "1";
}
