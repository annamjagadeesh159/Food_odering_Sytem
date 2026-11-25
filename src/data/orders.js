export const orders = [
  {
    id: "ORD-1001",
    date: "18 Nov 2026",
    status: "DELIVERED",
    total: 497,
    items: [
      { name: "Chicken Biryani", qty: 1, price: 299 },
      { name: "Masala Dosa", qty: 2, price: 99 },
    ],
  },
  {
    id: "ORD-1002",
    date: "21 Nov 2026",
    status: "OUT_FOR_DELIVERY",
    total: 378,
    items: [
      { name: "Margherita Pizza", qty: 1, price: 249 },
      { name: "Veg Burger", qty: 1, price: 129 },
    ],
  },
  {
    id: "ORD-1003",
    date: "22 Nov 2026",
    status: "PREPARING",
    total: 329,
    items: [{ name: "Pepperoni Pizza", qty: 1, price: 329 }],
  },
];