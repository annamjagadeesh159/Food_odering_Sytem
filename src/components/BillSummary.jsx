import { FREE_DELIVERY_AT } from "../utils/pricing";
import "./BillSummary.css";

function BillSummary({ bill }) {
  const toFree = FREE_DELIVERY_AT - (bill.itemTotal - bill.discount);

  return (
    <div className="bill">
      <div className="line">
        <span>Item Total</span>
        <span>₹{bill.itemTotal}</span>
      </div>

      {bill.discount > 0 && (
        <div className="line discount">
          <span>Coupon discount</span>
          <span>-₹{bill.discount}</span>
        </div>
      )}

      <div className="line">
        <span>Delivery Fee</span>
        <span>{bill.delivery === 0 ? "Free" : `₹${bill.delivery}`}</span>
      </div>

      <div className="line">
        <span>Taxes &amp; Charges</span>
        <span>₹{bill.tax}</span>
      </div>

      <div className="line total">
        <span>Total Amount</span>
        <span>₹{bill.total}</span>
      </div>

      {bill.delivery > 0 && toFree > 0 && (
        <p className="note">Add ₹{toFree} more for free delivery.</p>
      )}
    </div>
  );
}

export default BillSummary;