
export const getShippingCost = (shippingOption, items) => {
  // Calculate total items weight (example implementation)
  const totalWeight = items.reduce((sum, item) => {
    return sum + (item.product.weight || 0.5) * item.quantity; // Default 0.5kg per item
  }, 0);

  // Calculate subtotal for free shipping threshold
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Shipping rules configuration (in €)
  const shippingRules = {
    standard: {
      baseCost: 5.9,
      freeThreshold: 50.0,
      weightLimit: 30, // kg
      surchargePerKg: 1.5, // over weight limit
    },
    express: {
      baseCost: 12.9,
      freeThreshold: 100.0,
      deliveryDays: 1 - 2,
    },
    international: {
      baseCost: 24.9,
      zones: {
        eu: 19.9,
        worldwide: 24.9,
      },
    },
    pickup: {
      baseCost: 0.0,
    },
  };

  // Check for free shipping coupon/offer
  const hasFreeShipping = items.some((item) =>
    product.tags?.includes("free-shipping")
  );

  // Get selected shipping option
  const option = shippingRules[shippingOption];

  if (!option) {
    throw new Error("Invalid shipping option");
  }

  let cost = option.baseCost;

  // Apply German e-commerce common rules
  if (shippingOption === "standard") {
    // Weight surcharge
    if (totalWeight > option.weightLimit) {
      cost += (totalWeight - option.weightLimit) * option.surchargePerKg;
    }

    // Free shipping threshold
    if (subtotal >= option.freeThreshold && !hasFreeShipping) {
      cost = 0;
    }
  }

  if (shippingOption === "express" && subtotal >= option.freeThreshold) {
    cost = 0;
  }

  // Apply free shipping offers
  if (hasFreeShipping && shippingOption !== "international") {
    cost = 0;
  }

  // Round to 2 decimal places for currency
  return Math.round(cost * 100) / 100;
};
