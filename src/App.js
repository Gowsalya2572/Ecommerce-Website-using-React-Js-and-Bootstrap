import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/AppNavbar';
import './App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ArtisanRoute from './components/ArtisanRoute';
import ArtisanDashboard from './components/ArtisanDashboard';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
    

  // Function to handle search, passed to AppNavbar
  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log("Searching for:", term);
  };

  return (
    <CartProvider>
      <ProductProvider>
    <Router>
      <Navbar onSearch={handleSearch}/>
      <div className="container mt-4" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList searchTerm={searchTerm} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin-dashboard" element={<AdminPanel />} />
          <Route path="/artisan-dashboard" element={
    <ArtisanRoute>
      <ArtisanDashboard />
    </ArtisanRoute>
  }
/>
        </Routes>
      </div>
    </Router>
    </ProductProvider>
    </CartProvider>
     
  );
}

export default App;
