import { NavLink, Link, Outlet, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout({ onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/");
  }

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <p className="brand">FOODAPP ADMIN</p>

        <nav>
          <NavLink to="/admin" end>Dashboard</NavLink>
          <Link to="/">Back to website</Link>
        </nav>

        <button className="logout" onClick={handleLogout}>Log out</button>
      </aside>

      <section className="content">
        <Outlet />
      </section>
    </div>
  );
}

export default AdminLayout;