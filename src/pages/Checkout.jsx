import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout({ items, total, onPlaceOrder }) {
  const navigate = useNavigate();

  // nothing to check out: send the user back to the cart
  if (items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  function handlePlaceOrder() {
    onPlaceOrder();        // empties the cart
    navigate("/orders");
  }

  return (
    <div className="container">
      <div className="checkout-page">
        <p className="eyebrow">Almost there</p>
        <h1>Checkout</h1>

        <div className="checkout-grid">
          <section className="panel">
            <h3>Delivery and payment</h3>
            <p className="note">
              The delivery address form arrives on Day 4, and online payment
              with Razorpay test mode on Day 18. For now, placing the order
              simply clears your cart and opens your orders.
            </p>
            <Link to="/cart" className="btn ghost-dark small">Edit cart</Link>
          </section>

          <aside className="panel">
            <h3>Order summary</h3>

            <ul className="lines">
              {items.map((item) => (
                <li key={item.id}>
                  <span>{item.name} x {item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </li>
              ))}
            </ul>

            <div className="total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="btn primary" onClick={handlePlaceOrder}>Place order</button>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Checkout;