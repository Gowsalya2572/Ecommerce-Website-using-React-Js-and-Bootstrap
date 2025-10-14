import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext";

const mockProducts = [
    {
      id: 1,
      name: "Handcrafted Silver Necklace",
      category: "Jewelry",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1599487488170-02f8a81b2f15",
    },
    {
      id: 2,
      name: "Ceramic Tea Set",
      category: "Pottery & Ceramics",
      price: 124.5,
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    },
    {
      id: 3,
      name: "Knitted Wool Scarf",
      category: "Textiles & Fabrics",
      price: 45.0,
      image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
    },
    {
      id: 4,
      name: "Turquoise Bead Bracelet",
      category: "Jewelry",
      price: 54.0,
      image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    },
    {
      id: 5,
      name: "Hand-painted Greeting Cards",
      category: "Paper Crafts",
      price: 39.5,
      image: "https://images.unsplash.com/photo-1600508772922-0e36f4c7b6f1",
    },
    {
      id: 6,
      name: "Artist Paint Brush Set",
      category: "Art & Supplies",
      price: 99.0,
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    },
  ];

function ProductList({ searchTerm }) {
  const [filter, setFilter] = useState(searchTerm || "");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  useEffect(() => {
    setFilter(searchTerm || "");
    setCurrentPage(1);
  }, [searchTerm]);


  const filteredProducts = mockProducts.filter(
    (product) =>
      (product.name || "")
        .toLowerCase()
        .includes((filter || "").toLowerCase()) ||
      (product.category || "")
        .toLowerCase()
        .includes((filter || "").toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      autoClose: 1200,
    });
  };

  const handleViewCart = () => {
    navigate("/cart");
  };

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h2 className="text-center mb-4 fw-bold text-dark">🛍️ Handmade Products</h2>

      {/* Search Filter */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 shadow-sm"
          placeholder="Search products..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="row">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 border-0 shadow-sm product-card">
                <img
                  src={product.image}
                  className="card-img-top rounded-top"
                  alt={product.name}
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="fw-bold">{product.name}</h6>
                  <p className="text-muted small mb-1">{product.category}</p>
                  <h6 className="text-danger mb-3">₹{product.price}</h6>

                  <span className="badge bg-success align-self-start mb-2">
                    In Stock
                  </span>

                  <button
                    className="btn btn-warning mt-auto text-white fw-semibold"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="bi bi-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted">
            <p>No products found.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4">
          {paginationItems}
        </Pagination>
      )}

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="cart-summary text-center mt-5 p-4 bg-light rounded shadow-sm">
          <h4>🛒 Cart Summary</h4>
          <p className="mb-1">
            Total Items:{" "}
            <span className="fw-bold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </p>
          <p className="mb-3">
            Total Price:{" "}
            <span className="fw-bold">
              ₹
              {cart
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </p>
          <button className="btn btn-success" onClick={handleViewCart}>
            Go to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;



