import { MinusIcon, PlusIcon, TrashIcon } from "./Icons";
import "./Cart.css";

const FREE_DELIVERY_AT = 500;

function Cart({ items, total, onIncrease, onDecrease, onRemove, onClear, onNavigate }) {
  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add a few dishes from the menu and they will appear here.</p>
        <button className="btn primary" onClick={() => onNavigate("menu")}>
          Browse the menu
        </button>
      </div>
    );
  }

  const remaining = FREE_DELIVERY_AT - total;
  const progress = Math.min(100, (total / FREE_DELIVERY_AT) * 100);

  return (
    <div className="cart">
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id} className="cart-row">
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price} each</p>
            </div>

            <div className="stepper">
              <button aria-label="Decrease quantity" onClick={() => onDecrease(item.id)}>
                <MinusIcon size={14} />
              </button>
              <span>{item.qty}</span>
              <button aria-label="Increase quantity" onClick={() => onIncrease(item.id)}>
                <PlusIcon size={14} />
              </button>
            </div>

            <span className="line-total">₹{item.price * item.qty}</span>

            <button
              className="remove"
              aria-label={`Remove ${item.name}`}
              onClick={() => onRemove(item.id)}
            >
              <TrashIcon size={18} />
            </button>
          </li>
        ))}
      </ul>

      <aside className="summary">
        <h3>Order summary</h3>

        <div className="line">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="progress">
          <span style={{ width: `${progress}%` }} />
        </div>

        {remaining <= 0 ? (
          <p className="note ok">You qualify for free delivery.</p>
        ) : (
          <p className="note">Add ₹{remaining} more for free delivery.</p>
        )}

        <div className="line total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button className="btn ghost-dark" onClick={onClear}>Clear cart</button>
      </aside>
    </div>
  );
}

export default Cart;