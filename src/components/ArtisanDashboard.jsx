

import React, { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function ArtisanDashboard() {
  const { products, addProduct } = useContext(ProductContext);
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    addProduct(form);
    setForm({ name: "", price: "", category: "", image: "" });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🎨 Artisan Dashboard</h2>

      <form onSubmit={handleAdd} className="row g-3 mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-success w-100">
            Add
          </button>
        </div>
      </form>

      <h4>Your Added Products</h4>
      <div className="row">
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          products.map((p) => (
            <div key={p.id} className="col-md-3 mb-3">
              <div className="card h-100">
                <img
                  src={p.image || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">₹{p.price}</p>
                  <p className="text-muted">{p.category}</p>
                  <span className="badge bg-warning text-dark">{p.status}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ArtisanDashboard;
