export const formatPrice = (price) => {
  const numericPrice = Number(price ?? 0);
  return `${numericPrice.toFixed(2)} €`;
};
