export function calcSubtotal(items) {
  return (items || []).reduce(
    (sum, it) => sum + (it.unitPrice || 0) * (it.quantity || 0),
    0
  );
}

export function calcTotal({
  subtotal = 0,
  discounts = 0,
  tax = 0,
  shipping = 0,
}) {
  return Math.max(0, subtotal - discounts + tax + shipping);
}
