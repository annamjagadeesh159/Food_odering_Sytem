import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Auth.css";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  // ProtectedRoute passes { from: "/checkout" }. If nothing was passed, go home.
  const from = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();   // stop the browser from reloading the page

    if (!email || !password) {
      setError("Enter your email and password.");
      return;
    }

    // TEMPORARY: any email and password works. Day 14 checks them on the backend.
    // An email that starts with "admin" gets the admin role so you can test /admin.
    const role = email.startsWith("admin") ? "admin" : "customer";
    onLogin({ name: email.split("@")[0], email, role });

    navigate(from, { replace: true });
  }

  return (
    <div className="container">
      <div className="auth-page">
        <h1>Log in</h1>
        <p className="sub">Welcome back. Log in to place and track your orders.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </label>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn primary">Log in</button>
        </form>

        <p className="switch">
          New here? <Link to="/register">Create an account</Link>
        </p>
        <p className="hint">
          Practice mode: any email works. Use an email starting with "admin" to open the admin area.
        </p>
      </div>
    </div>
  );
}

export default Login;