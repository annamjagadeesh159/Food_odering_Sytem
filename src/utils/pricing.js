export const DELIVERY_FEE = 40;
export const FREE_DELIVERY_AT = 500;
export const TAX_RATE = 0.05;

// Practice coupons, checked in the browser. Day 15 moves this check to the backend.
export const COUPONS = {
  SAVE10: { type: "percent", value: 10 },
  FIRST50: { type: "flat", value: 50 },
};

export const SIZES = [
  { name: "Regular", factor: 1 },
  { name: "Medium", factor: 1.4 },
  { name: "Large", factor: 1.8 },
];

export const EXTRAS_BY_CATEGORY = {
  Pizza: [
    { name: "Extra Cheese", price: 30 },
    { name: "Olives", price: 20 },
    { name: "Mushrooms", price: 20 },
  ],
  Burger: [
    { name: "Extra Cheese", price: 30 },
    { name: "Extra Patty", price: 50 },
  ],
};

// price of ONE unit for the chosen size and extras
export function unitPriceFor(food, sizeName, extraNames) {
  const size = SIZES.find((s) => s.name === sizeName) || SIZES[0];
  const options = EXTRAS_BY_CATEGORY[food.category] || [];
  const extrasTotal = options
    .filter((e) => extraNames.includes(e.name))
    .reduce((sum, e) => sum + e.price, 0);

  return Math.round(food.price * size.factor) + extrasTotal;
}

// the whole bill, calculated from the cart items and the coupon code
export function calcBill(items, couponCode) {
  const itemTotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const coupon = COUPONS[couponCode];
  let discount = 0;
  if (coupon) {
    discount =
      coupon.type === "percent"
        ? Math.round((itemTotal * coupon.value) / 100)
        : Math.min(coupon.value, itemTotal);
  }

  const afterDiscount = itemTotal - discount;
  const delivery = items.length === 0 || afterDiscount >= FREE_DELIVERY_AT ? 0 : DELIVERY_FEE;
  const tax = Math.round(afterDiscount * TAX_RATE);

  return { itemTotal, discount, delivery, tax, total: afterDiscount + delivery + tax };
}