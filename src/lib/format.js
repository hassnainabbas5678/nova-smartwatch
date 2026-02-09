export function money(amount, currency = "USD") {
  const n = Number(amount || 0);
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0
    }).format(n);
  } catch {
    // fallback
    return `$${Math.round(n)}`;
  }
}
