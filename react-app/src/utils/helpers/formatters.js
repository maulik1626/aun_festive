export function formatCurrency(amount, currency = "USD", locale = "en-US") {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount || 0);
  } catch {
    return `${currency} ${Number(amount || 0).toFixed(2)}`;
  }
}

export function formatDate(date, locale = "en-US", options) {
  const d = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(d);
}
