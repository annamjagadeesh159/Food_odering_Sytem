import { SearchIcon, BagIcon } from "./Icons";
import "./Navbar.css";

const links = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "about", label: "About" },
];

function Navbar({ cartCount, currentPage, onNavigate }) {
  return (
    <header className="navbar">
      <button className="brand" onClick={() => onNavigate("home")}>
        <span className="logo">F</span>
        <span className="brand-name">FOODAPP</span>
      </button>

      <nav className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            className={currentPage === link.id ? "nav-link active" : "nav-link"}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-btn" aria-label="Browse the menu" onClick={() => onNavigate("menu")}>
          <SearchIcon size={18} />
        </button>

        <button className="icon-btn" aria-label="Open cart" onClick={() => onNavigate("cart")}>
          <BagIcon size={18} />
          {cartCount > 0 && <span className="count">{cartCount}</span>}
        </button>

        <button className="btn primary small" onClick={() => onNavigate("cart")}>
          Checkout
        </button>
      </div>
    </header>
  );
}

export default Navbar;