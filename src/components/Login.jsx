import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedUser = login(email, password);
    if (matchedUser) {
      if (matchedUser.role === "admin") {
        navigate("/");
      } else if (matchedUser.role === "artisan") {
        navigate("/");
      } else {
        navigate("/");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#d5f7e6ff" }}
    >
      <div className="container text-center">
        <h6 className="mb-3 ">
          <a href="/" className="text-decoration-none text-dark">
            ← Back to Home
          </a>
        </h6>

        <h2 className="fw-bold mb-2">Welcome Back</h2>
        <p className="text-muted mb-4">
          Sign in to your account to continue
        </p>

        <div
          className="card mx-auto shadow p-4"
          style={{ maxWidth: "420px", borderRadius: "12px" }}
        >
          <h5 className="fw-bold mb-4">Login</h5>

          <form onSubmit={handleSubmit}>
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
           <div className="text-end mb-3">
              <a
                href="/forgot-password"
                className="text-decoration-none"
                style={{ color: "#014224", fontSize: "0.9rem" }}
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="btn w-100 fw-bold text-white"
              style={{ backgroundColor: "#014224" }}
            >
              Sign In
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default Login;
