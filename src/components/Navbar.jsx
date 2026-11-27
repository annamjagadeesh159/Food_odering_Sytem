import { NavLink, Link, useNavigate } from "react-router-dom";
import { SearchIcon, BagIcon, UtensilsIcon } from "./Icons";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/orders", label: "Track Order" },
];

function navClass({ isActive }) {
  return isActive ? "nav-link active" : "nav-link";
}

function Navbar({ cartCount, user, onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/");
  }

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="logo"><UtensilsIcon size={18} /></span>
        FoodApp
      </Link>

      <nav className="nav-links">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <Link to="/menu" className="icon-btn" aria-label="Browse the menu">
          <SearchIcon size={18} />
        </Link>

        <Link to="/cart" className="icon-btn" aria-label="Open cart">
          <BagIcon size={18} />
          {cartCount > 0 && <span className="count">{cartCount}</span>}
        </Link>

        {user ? (
          <>
            <span className="user-name">{user.name}</span>
            <button className="btn ghost-dark small" onClick={handleLogout}>
              Log out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn primary small">Log in</Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;