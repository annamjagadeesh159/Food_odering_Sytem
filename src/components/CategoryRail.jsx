import "./CategoryRail.css";

function CategoryRail({ categories, active, onChange }) {
  return (
    <nav className="category-rail" aria-label="Categories">
      {["All", ...categories].map((name) => (
        <button
          key={name}
          className={active === name ? "rail-item active" : "rail-item"}
          onClick={() => onChange(name)}
        >
          <span className="dot">{name[0]}</span>
          {name}
        </button>
      ))}
    </nav>
  );
}

export default CategoryRail;