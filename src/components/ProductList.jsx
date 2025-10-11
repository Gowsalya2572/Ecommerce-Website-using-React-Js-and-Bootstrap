// src/components/Products.js
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Mock data with 30 products including images
const mockProducts = [
  { id: 1, name: 'Handmade Pot', category: 'Home Decor', price: 500, image: 'https://images.unsplash.com/photo-1582469955275-444d38a93b5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Wooden Toy', category: 'Kids', price: 300, image: 'https://images.unsplash.com/photo-1611746872915-643f06b9a6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Artisan Bag', category: 'Fashion', price: 1500, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Ceramic Vase', category: 'Home Decor', price: 800, image: 'https://images.unsplash.com/photo-1602524208305-8e3b5c0b9db3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Knitted Scarf', category: 'Fashion', price: 400, image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Organic Soap', category: 'Beauty', price: 250, image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 7, name: 'Wall Hanging', category: 'Home Decor', price: 600, image: 'https://images.unsplash.com/photo-1601968177507-a5e8f1f57c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 8, name: 'Children’s Puzzle', category: 'Kids', price: 350, image: 'https://images.unsplash.com/photo-1617196039897-16f0d4a6e2a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 9, name: 'Leather Wallet', category: 'Fashion', price: 1200, image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 10, name: 'Aromatherapy Oil', category: 'Beauty', price: 700, image: 'https://images.unsplash.com/photo-1603398938378-e54eab6740fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 11, name: 'Decorative Lamp', category: 'Home Decor', price: 950, image: 'https://images.unsplash.com/photo-1598965402089-6b1c47d3c79f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 12, name: 'Eco-friendly Bottle', category: 'Lifestyle', price: 550, image: 'https://images.unsplash.com/photo-1600267175160-34ed7f3a9f9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 13, name: 'Handcrafted Jewelry', category: 'Fashion', price: 1300, image: 'https://images.unsplash.com/photo-1600185365991-d4f5eecf4022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 14, name: 'Acrylic Painting', category: 'Art', price: 2500, image: 'https://images.unsplash.com/photo-1602524208111-19a28c2fc8d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 15, name: 'Handmade Basket', category: 'Home Decor', price: 450, image: 'https://images.unsplash.com/photo-1578575437130-527eed3abb9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 16, name: 'Herbal Tea Pack', category: 'Lifestyle', price: 350, image: 'https://images.unsplash.com/photo-1603393979964-8a889e9b6a85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 17, name: 'Wood Carving', category: 'Art', price: 1800, image: 'https://images.unsplash.com/photo-1590926939510-22e8ac4320d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 18, name: 'Face Cream', category: 'Beauty', price: 300, image: 'https://images.unsplash.com/photo-1600180758895-f65f4c8f6a57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 19, name: 'Yoga Mat', category: 'Lifestyle', price: 700, image: 'https://images.unsplash.com/photo-1600783246994-3f7857ec0f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 20, name: 'Handwoven Shawl', category: 'Fashion', price: 900, image: 'https://images.unsplash.com/photo-1623120583347-6ab5e7f2b938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 21, name: 'Scented Candle', category: 'Home Decor', price: 350, image: 'https://images.unsplash.com/photo-1600298881968-52e8c2e21ea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 22, name: 'Kids Story Book', category: 'Kids', price: 200, image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 23, name: 'Travel Bag', category: 'Lifestyle', price: 1100, image: 'https://images.unsplash.com/photo-1600185365143-6aef671c5f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 24, name: 'Natural Lip Balm', category: 'Beauty', price: 150, image: 'https://images.unsplash.com/photo-1610025750918-4a9d2f8ef328?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 25, name: 'Art Poster', category: 'Art', price: 400, image: 'https://images.unsplash.com/photo-1522205417640-2f34f1b6b7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 26, name: 'Clay Pottery', category: 'Home Decor', price: 700, image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 27, name: 'Handcrafted Shoes', category: 'Fashion', price: 1600, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 28, name: 'Kids Coloring Set', category: 'Kids', price: 250, image: 'https://images.unsplash.com/photo-1605727216803-20fc3c0e7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 29, name: 'Aromatic Herbs', category: 'Lifestyle', price: 300, image: 'https://images.unsplash.com/photo-1606755962772-85c7f3f5b0e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 30, name: 'Wall Clock', category: 'Home Decor', price: 650, image: 'https://images.unsplash.com/photo-1587734575264-7a7eaf1b8eb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];


function ProductList({ searchTerm }) {
   const [filter, setFilter] = useState(searchTerm || '');
   const [currentPage, setCurrentPage] = useState(1);
   const [cart, setCart] = useState([]);
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

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // If already in cart, increase quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If not in cart, add it
      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart!`);
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

      {cart.length > 0 && (
        <div className="cart-summary text-center mt-5 p-3 bg-light rounded">
          <h4>🛍️ Cart Summary</h4>
          <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <p>Total Price: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</p>
          <button className="btn btn-success">Go to Checkout</button>
        </div>
      )}

    </div>
  );
}

export default ProductList;
