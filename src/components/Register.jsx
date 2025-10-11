import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); 
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password, role };
    register(userData);
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#d5f7e6ff" }}
    >
      <div className="container text-center">
        <h6 className="mb-3">
          <a href="/" className="text-decoration-none text-dark">
            ← Back to Home
          </a>
        </h6>

        <p className="text-muted mb-4">
          Create your account to get started
        </p>

        <div
          className="card mx-auto shadow p-4"
          style={{ maxWidth: "420px", borderRadius: "12px" }}
        >
          <h5 className="fw-bold mb-4">Create Account</h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label className="form-label fw-semibold">I want to</label>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="customer"
                    value="user"
                    checked={role === "user"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="customer">
                    <strong>Customer</strong> — Browse and purchase handmade products
                  </label>
                </div>

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="artisan"
                    value="artisan"
                    checked={role === "artisan"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="artisan">
                    <strong>Artisan</strong> — Sell your handcrafted creations
                  </label>
                </div>

                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="role"
                    id="admin"
                    value="admin"
                    checked={role === "admin"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="admin">
                    <strong>Admin</strong> — Manage platform users & products
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4 text-start">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 fw-bold text-white"
              style={{ backgroundColor: "#014224" }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
