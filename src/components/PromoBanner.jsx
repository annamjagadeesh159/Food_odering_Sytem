import { ArrowRightIcon } from "./Icons";
import "./PromoBanner.css";

function PromoBanner({ title, subtitle, highlight, buttonText, onClick }) {
  return (
    <div className="promo">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button className="btn primary small" onClick={onClick}>
          {buttonText}
          <ArrowRightIcon size={16} />
        </button>
      </div>

      <span className="big">{highlight}</span>
    </div>
  );
}

export default PromoBanner;