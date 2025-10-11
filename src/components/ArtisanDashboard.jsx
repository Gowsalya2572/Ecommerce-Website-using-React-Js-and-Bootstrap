// pages/ArtisanDashboard.js
import React, { useState } from "react";

function ArtisanDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "", image: "" });

  // Add Product
  const handleAdd = (e) => {
    e.preventDefault();
    setProducts([...products, { id: Date.now(), ...form }]);
    setForm({ name: "", price: "", category: "", image: "" });
  };

  // Update Product
  const handleUpdate = (id, updated) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  // Delete Product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>🎨 Artisan Dashboard</h2>

      {/* Add Product Form */}
      <form onSubmit={handleAdd} className="mb-4">
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Product List */}
      <h3>Your Products</h3>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-3">
            <div className="card">
              <img src={p.image} alt={p.name} className="card-img-top" />
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>₹{p.price}</p>
                <p>{p.category}</p>
                <button onClick={() => handleDelete(p.id)} className="btn btn-danger btn-sm">Delete</button>
                <button onClick={() => handleUpdate(p.id, { name: p.name + " (Updated)" })} className="btn btn-warning btn-sm ms-2">Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtisanDashboard;
