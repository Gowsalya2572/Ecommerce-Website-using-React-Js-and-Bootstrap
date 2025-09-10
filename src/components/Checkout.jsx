import React from 'react';
import { loadRazorpay } from '../utils/razorpay';

function Checkout() {
  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key
      amount: 50000, // Amount in paise = ₹500
      currency: "INR",
      name: "Artisan Store",
      description: "Test Transaction",
      handler: function(response){
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
      },
      theme: {
        color: "#3399cc"
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button className="btn btn-success" onClick={handlePayment}>
        Pay with Razorpay
      </button>
    </div>
  );
}

export default Checkout;