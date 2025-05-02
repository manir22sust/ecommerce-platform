
export const calculateTax = (subtotal) => {
  // German VAT rate (19% standard rate)
  const vatRate = 0.19;

  // Calculate tax amount (rounded to 2 decimal places)
  const tax = Math.round(subtotal * vatRate * 100) / 100;

  return tax;
};

// Optional: For future different tax rates
/*
export const calculateItemTax = (item) => {
  // Implement different tax rates based on product category
  const defaultRate = 0.19;
  return item.price * item.quantity * defaultRate;
};
*/
