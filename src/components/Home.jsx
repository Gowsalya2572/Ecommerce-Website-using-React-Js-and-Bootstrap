// src/components/Home.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div className="container mt-4">

      {/* Welcome Message */}
      <div className="text-center mb-4">
        <h1>Welcome to Our Store!</h1>
        <p>Find the best products at amazing prices!</p>
      </div>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x300?text=Summer+Sale+Up+to+50%25+Off"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Summer Sale!</h3>
            <p>Up to 50% off on selected items.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x300?text=New+Arrivals"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>New Arrivals</h3>
            <p>Check out the latest trends and offers!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x300?text=Festive+Discounts"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Festive Discounts</h3>
            <p>Celebrate with amazing offers across all categories.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Home;
