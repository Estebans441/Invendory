export const formatCurrency = (
  value: number,
  locale: string = "es-CO",
  currency: string = "COP"
) => new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
