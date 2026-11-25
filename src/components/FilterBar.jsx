import "./FilterBar.css";

function FilterBar({ categories, category, onCategoryChange, sort, onSortChange }) {
  return (
    <div className="filter-bar">
      <div className="inner">
        <div className="filter-chips">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              className={category === cat ? "chip active" : "chip"}
              onClick={() => onCategoryChange(cat)}
            >
              {cat === "All" ? "All dishes" : cat}
            </button>
          ))}
        </div>

        <label className="sort">
          Sort by
          <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
            <option value="popular">Most popular</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default FilterBar;