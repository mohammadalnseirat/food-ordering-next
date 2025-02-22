export const formatCurrency = (number: number) => {
  const FORMATTER_CURRENCY = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });
  return FORMATTER_CURRENCY.format(number);
};
