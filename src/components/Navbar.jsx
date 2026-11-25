import { NavLink, Link, useNavigate } from "react-router-dom";
import { SearchIcon, BagIcon } from "./Icons";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
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
        <span className="logo">F</span>
        <span className="brand-name">FOODAPP</span>
      </Link>

      <nav className="nav-links">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
            {link.label}
          </NavLink>
        ))}

        {user && (
          <NavLink to="/orders" className={navClass}>
            Orders
          </NavLink>
        )}
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
          <Link to="/login" className="btn primary small">
            Log in
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;