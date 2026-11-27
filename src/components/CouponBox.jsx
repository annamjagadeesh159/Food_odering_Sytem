import { useState } from "react";
import { TagIcon } from "./Icons";
import "./CouponBox.css";

function CouponBox({ applied, onApply, onRemove }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  function handleApply() {
    const ok = onApply(code);
    setMessage(ok ? "" : "This coupon code is not valid.");
    if (ok) setCode("");
  }

  if (applied) {
    return (
      <div className="coupon applied">
        <span className="name">
          <TagIcon size={16} />
          <strong>{applied}</strong> applied
        </span>
        <button onClick={onRemove}>Remove</button>
      </div>
    );
  }

  return (
    <div className="coupon">
      <h4><TagIcon size={16} />Apply Coupon</h4>

      <div className="row">
        <input
          type="text"
          placeholder="Enter Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="btn primary small" onClick={handleApply}>Apply</button>
      </div>

      {message && <p className="error">{message}</p>}
      <p className="hint">Practice codes: SAVE10 or FIRST50</p>
    </div>
  );
}

export default CouponBox;