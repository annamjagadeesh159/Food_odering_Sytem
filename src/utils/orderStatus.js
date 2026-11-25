export const ORDER_STATUS = {
  PENDING:          { label: "Order placed",     tone: "gray" },
  CONFIRMED:        { label: "Confirmed",        tone: "dark" },
  PREPARING:        { label: "Preparing",        tone: "orange" },
  READY_FOR_PICKUP: { label: "Ready for pickup", tone: "orange" },
  OUT_FOR_DELIVERY: { label: "Out for delivery", tone: "orange" },
  DELIVERED:        { label: "Delivered",        tone: "dark" },
  CANCELLED:        { label: "Cancelled",        tone: "red" },
};

// the order a normal delivery moves through (used for the timeline)
export const STATUS_STEPS = [
  "PENDING",
  "CONFIRMED",
  "PREPARING",
  "READY_FOR_PICKUP",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
];