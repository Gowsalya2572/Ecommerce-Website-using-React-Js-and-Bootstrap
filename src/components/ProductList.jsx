// src/components/Products.js
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';

// Mock data with 30 products including images
const mockProducts = [
  { id: 1, name: 'Handmade Pot', category: 'Home Decor', price: 500, image: 'https://via.placeholder.com/150?text=Pot' },
  { id: 2, name: 'Wooden Toy', category: 'Kids', price: 300, image: 'https://via.placeholder.com/150?text=Toy' },
  { id: 3, name: 'Artisan Bag', category: 'Fashion', price: 1500, image: 'https://via.placeholder.com/150?text=Bag' },
  { id: 4, name: 'Ceramic Vase', category: 'Home Decor', price: 800, image: 'https://via.placeholder.com/150?text=Vase' },
  { id: 5, name: 'Knitted Scarf', category: 'Fashion', price: 400, image: 'https://via.placeholder.com/150?text=Scarf' },
  { id: 6, name: 'Organic Soap', category: 'Beauty', price: 250, image: 'https://via.placeholder.com/150?text=Soap' },
  { id: 7, name: 'Wall Hanging', category: 'Home Decor', price: 600, image: 'https://via.placeholder.com/150?text=Wall+Hanging' },
  { id: 8, name: 'Children’s Puzzle', category: 'Kids', price: 350, image: 'https://via.placeholder.com/150?text=Puzzle' },
  { id: 9, name: 'Leather Wallet', category: 'Fashion', price: 1200, image: 'https://via.placeholder.com/150?text=Wallet' },
  { id: 10, name: 'Aromatherapy Oil', category: 'Beauty', price: 700, image: 'https://via.placeholder.com/150?text=Oil' },
  { id: 11, name: 'Decorative Lamp', category: 'Home Decor', price: 950, image: 'https://via.placeholder.com/150?text=Lamp' },
  { id: 12, name: 'Eco-friendly Bottle', category: 'Lifestyle', price: 550, image: 'https://via.placeholder.com/150?text=Bottle' },
  { id: 13, name: 'Handcrafted Jewelry', category: 'Fashion', price: 1300, image: 'https://via.placeholder.com/150?text=Jewelry' },
  { id: 14, name: 'Acrylic Painting', category: 'Art', price: 2500, image: 'https://via.placeholder.com/150?text=Painting' },
  { id: 15, name: 'Handmade Basket', category: 'Home Decor', price: 450, image: 'https://via.placeholder.com/150?text=Basket' },
  { id: 16, name: 'Herbal Tea Pack', category: 'Lifestyle', price: 350, image: 'https://via.placeholder.com/150?text=Tea' },
  { id: 17, name: 'Wood Carving', category: 'Art', price: 1800, image: 'https://via.placeholder.com/150?text=Wood+Carving' },
  { id: 18, name: 'Face Cream', category: 'Beauty', price: 300, image: 'https://via.placeholder.com/150?text=Face+Cream' },
  { id: 19, name: 'Yoga Mat', category: 'Lifestyle', price: 700, image: 'https://via.placeholder.com/150?text=Yoga+Mat' },
  { id: 20, name: 'Handwoven Shawl', category: 'Fashion', price: 900, image: 'https://via.placeholder.com/150?text=Shawl' },
  { id: 21, name: 'Scented Candle', category: 'Home Decor', price: 350, image: 'https://via.placeholder.com/150?text=Candle' },
  { id: 22, name: 'Kids Story Book', category: 'Kids', price: 200, image: 'https://via.placeholder.com/150?text=Story+Book' },
  { id: 23, name: 'Travel Bag', category: 'Lifestyle', price: 1100, image: 'https://via.placeholder.com/150?text=Travel+Bag' },
  { id: 24, name: 'Natural Lip Balm', category: 'Beauty', price: 150, image: 'https://via.placeholder.com/150?text=Lip+Balm' },
  { id: 25, name: 'Art Poster', category: 'Art', price: 400, image: 'https://via.placeholder.com/150?text=Poster' },
  { id: 26, name: 'Clay Pottery', category: 'Home Decor', price: 700, image: 'https://via.placeholder.com/150?text=Pottery' },
  { id: 27, name: 'Handcrafted Shoes', category: 'Fashion', price: 1600, image: 'https://via.placeholder.com/150?text=Shoes' },
  { id: 28, name: 'Kids Coloring Set', category: 'Kids', price: 250, image: 'https://via.placeholder.com/150?text=Coloring+Set' },
  { id: 29, name: 'Aromatic Herbs', category: 'Lifestyle', price: 300, image: 'https://via.placeholder.com/150?text=Herbs' },
  { id: 30, name: 'Wall Clock', category: 'Home Decor', price: 650, image: 'https://via.placeholder.com/150?text=Clock' },
];

function ProductList({ searchTerm }) {
   const [filter, setFilter] = useState(searchTerm || '');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setFilter(searchTerm || '');
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredProducts = mockProducts.filter(product =>
    (product.name || '').toLowerCase().includes((filter || '').toLowerCase()) ||
    (product.category || '').toLowerCase().includes((filter || '').toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

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
      <h2 className='text-center mb-4'>Products</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Filter products"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="row">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5>{product.name}</h5>
                  <p>Category: {product.category}</p>
                  <p>₹{product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No products found.</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4">
          {paginationItems}
        </Pagination>
      )}
    </div>
  );
}

export default ProductList;
