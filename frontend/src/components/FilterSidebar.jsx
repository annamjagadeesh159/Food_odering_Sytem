import { FlameIcon } from "./Icons";
import "./FilterSidebar.css";

const spiceLevels = ["Mild", "Medium", "Hot"];

function FilterSidebar({
  priceLimit, maxPrice, onMaxPriceChange,
  spice, onSpiceChange,
  diet, onDietChange,
  onClear,
}) {
  return (
    <aside className="filter-sidebar">
      <div className="group">
        <h4>Price range</h4>
        <input
          className="range"
          type="range"
          min="0"
          max={priceLimit}
          step="10"
          value={maxPrice}
          aria-label="Maximum price"
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
        />
        <div className="range-labels">
          <span>₹0</span>
          <span>Up to ₹{maxPrice}</span>
        </div>
      </div>

      <div className="group">
        <h4>Spice level</h4>
        <div className="spice">
          {spiceLevels.map((level) => (
            <button
              key={level}
              className={spice === level ? "spice-btn active" : "spice-btn"}
              onClick={() => onSpiceChange(spice === level ? "All" : level)}
            >
              <FlameIcon size={18} />
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="group">
        <h4>Dietary</h4>

        <label className="check">
          <input
            type="checkbox"
            checked={diet === "veg"}
            onChange={() => onDietChange(diet === "veg" ? "all" : "veg")}
          />
          Vegetarian
        </label>

        <label className="check">
          <input
            type="checkbox"
            checked={diet === "nonveg"}
            onChange={() => onDietChange(diet === "nonveg" ? "all" : "nonveg")}
          />
          Non-vegetarian
        </label>
      </div>

      <button className="clear" onClick={onClear}>Clear filters</button>
    </aside>
  );
}

export default FilterSidebar;