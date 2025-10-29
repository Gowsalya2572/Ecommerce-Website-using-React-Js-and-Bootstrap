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
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Artist Paint Brush Set",
    category: "Art & Supplies",
    price: 99.0,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
  },
  {
    id: 7,
    name: "Macrame Wall Hanging",
    category: "Home Decor",
    price: 75.99,
    image: "https://images.unsplash.com/photo-1601044807399-f86d5d2f38cf",
  },
  {
    id: 8,
    name: "Scented Soy Candle",
    category: "Home Decor",
    price: 32.5,
    image: "https://images.unsplash.com/photo-1598300056390-4c4b70b06c27",
  },
  {
    id: 9,
    name: "Handwoven Basket",
    category: "Storage & Decor",
    price: 59.0,
    image: "https://images.unsplash.com/photo-1590080875830-bb47b9a1c1a1",
  },
  {
    id: 10,
    name: "Wooden Serving Board",
    category: "Kitchenware",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1577985051167-0e6d09c3e9b9",
  },
  {
    id: 11,
    name: "Minimalist Clay Vase",
    category: "Pottery & Ceramics",
    price: 69.5,
    image: "https://images.unsplash.com/photo-1590080875830-bb47b9a1c1a1",
  },
  {
    id: 12,
    name: "Handmade Leather Wallet",
    category: "Accessories",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1618354691373-d851c1b4b6ec",
  },
  {
    id: 13,
    name: "Organic Cotton Tote Bag",
    category: "Textiles & Fabrics",
    price: 48.0,
    image: "https://images.unsplash.com/photo-1593032465171-8d2c38e7b59a",
  },
  {
    id: 14,
    name: "Hand-painted Ceramic Mug",
    category: "Pottery & Ceramics",
    price: 35.5,
    image: "https://images.unsplash.com/photo-1556800734-6e9e76a7e1a7",
  },
  {
    id: 15,
    name: "Woven Rattan Mirror Frame",
    category: "Home Decor",
    price: 95.0,
    image: "https://images.unsplash.com/photo-1606813902772-9a5a9f1eec61",
  },
  {
    id: 16,
    name: "Beeswax Candle Set",
    category: "Home Decor",
    price: 42.0,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cfb934",
  },
  {
    id: 17,
    name: "Crochet Plant Hanger",
    category: "Garden & Plants",
    price: 37.5,
    image: "https://images.unsplash.com/photo-1616628188500-bd57a43e5b02",
  },
  {
    id: 18,
    name: "Wood Carved Elephant Statue",
    category: "Art & Sculpture",
    price: 110.0,
    image: "https://images.unsplash.com/photo-1598300056390-4c4b70b06c27",
  },
  {
    id: 19,
    name: "Hand-dyed Cushion Cover",
    category: "Textiles & Fabrics",
    price: 55.0,
    image: "https://images.unsplash.com/photo-1589739904080-8d58a42cc3b2",
  },
  {
    id: 20,
    name: "Resin Art Coaster Set",
    category: "Art & Supplies",
    price: 44.0,
    image: "https://images.unsplash.com/photo-1616628188500-bd57a43e5b02",
  },
  {
    id: 21,
    name: "Handcrafted Bamboo Lamp",
    category: "Lighting",
    price: 140.0,
    image: "https://images.unsplash.com/photo-1589739904080-8d58a42cc3b2",
  },
  {
    id: 22,
    name: "Crochet Baby Blanket",
    category: "Kids",
    price: 80.0,
    image: "https://images.unsplash.com/photo-1588001830300-1e37b190418e",
  },
  {
    id: 23,
    name: "Handmade Clay Earrings",
    category: "Jewelry",
    price: 28.0,
    image: "https://images.unsplash.com/photo-1586363104863-3a3c2bbf1c6a",
  },
  {
    id: 24,
    name: "Personalized Wooden Nameplate",
    category: "Home Decor",
    price: 99.5,
    image: "https://images.unsplash.com/photo-1601044807399-f86d5d2f38cf",
  },
  {
    id: 25,
    name: "Acrylic Landscape Painting",
    category: "Art & Painting",
    price: 130.0,
    image: "https://images.unsplash.com/photo-1602526432602-bb62f2b45d39",
  },
  {
    id: 26,
    name: "Macrame Keychain",
    category: "Accessories",
    price: 22.0,
    image: "https://images.unsplash.com/photo-1601044807399-f86d5d2f38cf",
  },
  {
    id: 27,
    name: "Embroidered Table Runner",
    category: "Home Decor",
    price: 67.0,
    image: "https://images.unsplash.com/photo-1602526432602-bb62f2b45d39",
  },
  {
    id: 28,
    name: "Clay Flower Pot",
    category: "Pottery & Ceramics",
    price: 52.0,
    image: "https://images.unsplash.com/photo-1588001830300-1e37b190418e",
  },
  {
    id: 29,
    name: "Custom Portrait Sketch",
    category: "Art & Painting",
    price: 210.0,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    id: 30,
    name: "Hand-carved Wooden Bowl",
    category: "Kitchenware",
    price: 88.0,
    image: "https://images.unsplash.com/photo-1606813902772-9a5a9f1eec61",
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
        className="bg-success"
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
        <Pagination className="justify-content-center mt-4 pagination-success">
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



