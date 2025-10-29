import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // artisan-added
  const [approvedProducts, setApprovedProducts] = useState([]); // admin-approved

  // Artisan adds product
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now(), status: "Pending" }]);
  };

  // Admin approves product
  const approveProduct = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setApprovedProducts([...approvedProducts, { ...product, status: "Approved" }]);
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  // Admin rejects product
  const rejectProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        approvedProducts,
        addProduct,
        approveProduct,
        rejectProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
