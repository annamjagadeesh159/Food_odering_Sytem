import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // one handler for every field: the input's name attribute picks the key
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TEMPORARY: nothing is saved yet. Day 4 adds validation, Day 14 saves to the backend.
    navigate("/login");
  }

  return (
    <div className="container">
      <div className="auth-page">
        <h1>Create account</h1>
        <p className="sub">Join to order your favourite dishes.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Password
            <input name="password" type="password" value={form.password} onChange={handleChange} required />
          </label>

          <button type="submit" className="btn primary">Create account</button>
        </form>

        <p className="switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;