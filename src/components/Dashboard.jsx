// components/Dashboard.js
import React, { useContext } from 'react';
import ProductList from './ProductList';
import { AuthContext } from '../context/AuthContext';

function Dashboard({ searchQuery }) {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="mb-4">Welcome, {user ? user.name : 'Guest'}!</h2>

      {/* Categories Section */}
      <div className="mb-4">
        <h5>Categories</h5>
        <div className="btn-group category-container mb-4" role="group" aria-label="Categories">
          <button type="button" className="btn btn-outline-primary">Home Decor</button>
          <button type="button" className="btn btn-outline-primary">Fashion</button>
          <button type="button" className="btn btn-outline-primary">Kids</button>
        </div>
      </div>

      {/* Products Section */}
      <ProductList searchQuery={searchQuery} />
    </div>
  );
}

export default Dashboard;
