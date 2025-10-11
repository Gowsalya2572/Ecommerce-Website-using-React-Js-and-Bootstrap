import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Checkout() {
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully! Address: ${address}, Payment: ${payment}`);
  };

  return (
    <Container className="mt-5">
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            required
          >
            <option value="">Select Payment</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="success">
          Place Order
        </Button>
      </Form>
    </Container>
  );
}

export default Checkout;
