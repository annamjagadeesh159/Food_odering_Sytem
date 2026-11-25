import { Link, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import { orders } from "../data/orders";
import { ORDER_STATUS, STATUS_STEPS } from "../utils/orderStatus";
import "./OrderDetails.css";

function OrderDetails() {
  const { id } = useParams();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="container">
        <p className="empty">Order {id} was not found.</p>
        <Link to="/orders" className="btn ghost-dark">Back to orders</Link>
      </div>
    );
  }

  const status = ORDER_STATUS[order.status];
  const currentIndex = STATUS_STEPS.indexOf(order.status);

  return (
    <div className="container">
      <div className="order-details">
        <div className="head">
          <div>
            <h1>{order.id}</h1>
            <p>Placed on {order.date}</p>
          </div>
          <Badge text={status.label} tone={status.tone} />
        </div>

        <div className="grid">
          <section className="panel">
            <h3>Order progress</h3>

            <ul className="timeline">
              {STATUS_STEPS.map((step, index) => {
                let state = "upcoming";
                if (index < currentIndex) state = "done";
                else if (index === currentIndex) state = "current";

                return (
                  <li key={step} className={state}>
                    {ORDER_STATUS[step].label}
                  </li>
                );
              })}
            </ul>

            {order.status === "OUT_FOR_DELIVERY" && (
              <div className="map-placeholder">
                Live map arrives on Day 20: Leaflet with OpenStreetMap and a moving delivery marker.
              </div>
            )}
          </section>

          <section className="panel">
            <h3>Items</h3>

            <ul className="items">
              {order.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name} x {item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </li>
              ))}
            </ul>

            <div className="total">
              <span>Total</span>
              <span>₹{order.total}</span>
            </div>
          </section>
        </div>

        <Link to="/orders" className="back-link">Back to all orders</Link>
      </div>
    </div>
  );
}

export default OrderDetails;