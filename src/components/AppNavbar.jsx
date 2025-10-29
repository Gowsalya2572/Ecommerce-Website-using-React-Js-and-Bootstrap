import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function AppNavbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    navigate('/products');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardPath = () => {
    if (!user) return "/login";
    if (user.role === "admin") return "/admin-dashboard";
    if (user.role === "artisan") return "/artisan-dashboard";
    return "/dashboard";
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#014224' }}>
      <div className="container-fluid">

        {/* Brand */}
        <NavLink className="navbar-brand" to="/dashboard" style={{ color: '#FFFFFF' }}>
          <h2>Go Shopping</h2>
        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: '#FFFFFF' }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">

          {/* Center Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" style={{ color: '#FFFFFF' }}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" style={{ color: '#FFFFFF' }}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bestseller" className="nav-link" style={{ color: '#FFFFFF' }}>Best Seller</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" style={{ color: '#FFFFFF' }}>Contact Us</NavLink>
            </li>
          </ul>

          {/* Search Bar (hidden on mobile toggle) */}
          <form
            className="d-flex my-2 my-lg-0"
            onSubmit={handleSearch}
            style={{ padding: '5px', borderRadius: '5px' }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products"
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderColor: '#bac095', border: '1px solid #BAC095', color: '#FFFFFF' }}
            />
            <button
              className="btn me-3"
              style={{ borderColor: '#BAC095', color: '#FFFFFF' }}
              type="submit"
            >
              Search
            </button>
          </form>

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
            {/* Cart */}
            <NavLink
              to="/cart"
              className="text-white position-relative text-decoration-none"
              style={{ fontSize: "1.5rem" }}
            >
              🛒
              {totalItems > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.7rem" }}
                >
                  {totalItems}
                </span>
              )}
            </NavLink>

            {/* Auth Buttons */}
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  type="button"
                  id="userMenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i> {user.name}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                  <li>
                    <NavLink className="dropdown-item" to={getDashboardPath()}>
                      {user.role === "admin"
                        ? "Admin Dashboard"
                        : user.role === "artisan"
                        ? "Artisan Dashboard"
                        : "User Dashboard"}
                    </NavLink>
                  </li>
                  <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/settings">Settings</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
                </ul>
              </div>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-success text-light">Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-success bg-success text-light">Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;





