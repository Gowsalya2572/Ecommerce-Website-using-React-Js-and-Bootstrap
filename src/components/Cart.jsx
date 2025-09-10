// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>No items yet!</p>
      <button className="btn btn-success" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Cart;
