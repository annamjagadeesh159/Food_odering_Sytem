import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import { orders } from "../data/orders";
import { ORDER_STATUS } from "../utils/orderStatus";
import "./Orders.css";

function Orders() {
  return (
    <div className="container">
      <div className="orders-page">
        <p className="eyebrow">Your account</p>
        <h1>My orders</h1>

        <ul className="order-list">
          {orders.map((order) => {
            const status = ORDER_STATUS[order.status];
            const itemCount = order.items.reduce((sum, item) => sum + item.qty, 0);

            return (
              <li key={order.id}>
                <Link to={`/orders/${order.id}`} className="order-row">
                  <div>
                    <h3>{order.id}</h3>
                    <p>{order.date} - {itemCount} items</p>
                  </div>

                  <Badge text={status.label} tone={status.tone} />
                  <span className="total">₹{order.total}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Orders;