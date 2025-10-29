
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function AdminPanel() {
  const { products, approvedProducts, approveProduct, rejectProduct } = useContext(ProductContext);

  return (
    <div className="container mt-4">
      <h2>🛠️ Admin Panel</h2>

      <h4 className="mt-4">Pending Artisan Products</h4>
      <div className="row">
        {products.length === 0 ? (
          <p>No pending products for approval.</p>
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
                  <h5>{p.name}</h5>
                  <p>₹{p.price}</p>
                  <p>{p.category}</p>
                  <button
                    onClick={() => approveProduct(p.id)}
                    className="btn btn-success btn-sm me-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectProduct(p.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <h4 className="mt-5">✅ Approved Products</h4>
      <div className="row">
        {approvedProducts.length === 0 ? (
          <p>No approved products yet.</p>
        ) : (
          approvedProducts.map((p) => (
            <div key={p.id} className="col-md-3 mb-3">
              <div className="card h-100 border-success">
                <img
                  src={p.image || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5>{p.name}</h5>
                  <p>₹{p.price}</p>
                  <p>{p.category}</p>
                  <span className="badge bg-success">{p.status}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminPanel;

