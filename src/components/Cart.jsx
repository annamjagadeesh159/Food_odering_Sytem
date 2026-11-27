import { Link } from "react-router-dom";
import FoodImage from "./FoodImage";
import QuantityStepper from "./QuantityStepper";
import CouponBox from "./CouponBox";
import BillSummary from "./BillSummary";
import { TrashIcon, ArrowRightIcon } from "./Icons";
import "./Cart.css";

function Cart({
  items, bill, coupon,
  onApplyCoupon, onRemoveCoupon,
  onIncrease, onDecrease, onRemove, onClear,
}) {
  if (items.length === 0) {
    return (
      <div className="cart-empty card">
        <h2>Your cart is empty</h2>
        <p>Add a few dishes from the menu and they will appear here.</p>
        <Link to="/menu" className="btn primary">Browse the menu</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-list">
        {items.map((item) => (
          <article key={item.key} className="cart-item">
            <div className="thumb">
              <FoodImage image={item.image} name={item.name} />
            </div>

            <div className="info">
              <h3>{item.name}</h3>
              <p>{item.variant}</p>
              <span className="price">₹{item.price}</span>
            </div>

            <QuantityStepper
              value={item.qty}
              onDecrease={() => onDecrease(item.key)}
              onIncrease={() => onIncrease(item.key)}
            />

            <button
              className="remove"
              aria-label={`Remove ${item.name}`}
              onClick={() => onRemove(item.key)}
            >
              <TrashIcon size={18} />
            </button>
          </article>
        ))}

        <button className="clear" onClick={onClear}>Clear cart</button>
      </div>

      <aside className="summary card">
        <CouponBox applied={coupon} onApply={onApplyCoupon} onRemove={onRemoveCoupon} />
        <BillSummary bill={bill} />

        <Link to="/checkout" className="btn primary block">
          Proceed to Checkout
          <ArrowRightIcon size={16} />
        </Link>
      </aside>
    </div>
  );
}

export default Cart;