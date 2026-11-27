import { MinusIcon, PlusIcon } from "./Icons";
import "./QuantityStepper.css";

function QuantityStepper({ value, onDecrease, onIncrease }) {
  return (
    <div className="stepper">
      <button aria-label="Decrease quantity" onClick={onDecrease}>
        <MinusIcon size={14} />
      </button>
      <span>{value}</span>
      <button aria-label="Increase quantity" onClick={onIncrease}>
        <PlusIcon size={14} />
      </button>
    </div>
  );
}

export default QuantityStepper;