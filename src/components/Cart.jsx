import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center p-5 bg-light rounded-4 shadow-sm">
          <h5>No items yet!</h5>
          <p className="text-muted">Add some products to your cart.</p>
          <button
            className="btn btn-success"
            onClick={() => navigate("/products")}
          >
            Explore Products
          </button>
        </div>
      ) : (
        <>
          <div className="row g-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="col-md-6 col-lg-4"
              >
                <div className="card shadow-sm border-0 h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.name}</h5>
                    <p className="card-text text-muted mb-2">₹{item.price}</p>

                    <div className="d-flex align-items-center mb-3">
                      <button
                        className="btn btn-sm btn-outline-secondary me-2"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary ms-2"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-semibold">
                        Total: ₹{item.price * item.quantity}
                      </span>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card shadow-lg mt-5 border-0">
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">Total Amount: ₹{totalAmount}</h5>
              <button className="btn btn-success btn-lg" onClick={handleCheckout}>
                Proceed to Checkout →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;



