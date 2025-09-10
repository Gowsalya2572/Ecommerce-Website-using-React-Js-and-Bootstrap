import React, { useState , useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function AppNavbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    navigate('/products');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#636B2F' }}>
  <div className="container-fluid">
    {/* Logo */}
    <NavLink className="navbar-brand" to="/dashboard" style={{ color: '#FFFFFF' }}>
      {/* <img src="https://via.placeholder.com/50" alt="Logo" style={{ height: '40px' }} /> */}
      <h2>Go Shopping</h2>
    </NavLink>

    {/* Links */}
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink to="/dashboard" className="nav-link" style={{ color: '#FFFFFF' }}>Home</NavLink>
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

    {/* Search */}
    <form className="d-flex " onSubmit={handleSearch} style={{ padding: '5px', borderRadius: '5px' }}>
      <input
        className="form-control me-2 "
        type="search"
        placeholder="Search products"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ borderColor: '#bac095', border: '1px solid #BAC095',color:'#636B2F' }}
      />
      <button className="btn me-3" style={{ borderColor: '#BAC095', color: '#FFFFFF' }} type="submit">Search</button>
    </form>

    {/* Action Buttons */}
    <div className="d-flex gap-3">
      <NavLink to="/cart" className="btn" style={{ borderColor: '#BAC095', color: '#FFFFFF' }}>
        <i className="bi bi-cart"></i> Cart
      </NavLink>
       {user ? (
        <>
              <div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="userMenu"
    data-bs-toggle="dropdown" aria-expanded="false">
    <i className="bi bi-person-circle"></i> {user.name}
  </button>
  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
    <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
    <li><NavLink className="dropdown-item" to="/settings">Settings</NavLink></li>
    <li><hr className="dropdown-divider" /></li>
    <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
  </ul>
</div>
 
</>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-success">Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-success">Sign Up</NavLink>
              </>
            )}
    </div>
  </div>
</nav>

  );
}

export default AppNavbar;





