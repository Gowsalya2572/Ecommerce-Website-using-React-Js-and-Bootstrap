import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    navigate("/checkout");
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">No items yet! Please add products from the shop.</p>
      ) : (
        <>
          <table className="table table-bordered">
            <thead className="table-success">
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Subtotal (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h5 className="text-end">Total: ₹{total}</h5>
          <div className="text-end">
            <button className="btn btn-success" onClick={handleCheckout}>
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;


