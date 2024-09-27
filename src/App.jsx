import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const products = [
    { id: 1, name: "Add-On 1", price: 599.99, image: "src/components/IMG_4830.JPG" },
    { id: 2, name: "Product 2", price: 899.99, image: "src/components/IMG_4831.JPG" },
    { id: 3, name: "Product 3", price: 299.99, image: "src/components/IMG_4832.JPG" },
    { id: 4, name: "Product 4", price: 399.99, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: 799.99, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: 499.99, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Product 7", price: 249.99, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Product 8", price: 699.99, image: "https://via.placeholder.com/150" },
    { id: 9, name: "Product 9", price: 350.00, image: "https://via.placeholder.com/150" },
    { id: 10, name: "Product 10", price: 450.00, image: "https://via.placeholder.com/150" },
    { id: 11, name: "Product 11", price: 150.00, image: "https://via.placeholder.com/150" },
    { id: 12, name: "Product 12", price: 250.00, image: "https://via.placeholder.com/150" },
    { id: 13, name: "Product 13", price: 550.00, image: "https://via.placeholder.com/150" },
    { id: 14, name: "Product 14", price: 650.00, image: "https://via.placeholder.com/150" },
    { id: 15, name: "Product 15", price: 850.00, image: "https://via.placeholder.com/150" },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleDecreaseQuantity = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  const getTotalPrice = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shipping = 100; // ค่าขนส่ง
    return subtotal + shipping; // ราคาสุทธิรวมค่าขนส่ง
  };

  return (
    <Router>
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 animate-bounce relative">
          <span className="bg-white w-full inline-block p-2 rounded-lg shadow-md z-10">
            Add-On MineCraft
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-30 z-0"></span>
        </h1>

        <Routes>
          {/* หน้าแรก - แสดง Product List */}
          <Route path="/" element={<ProductList products={products} onAddToCart={handleAddToCart} cartItems={cartItems} />} />
          {/* หน้าชอปปิ้ง - แสดง Shopping Cart */}
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onDecreaseQuantity={handleDecreaseQuantity}
                onAddToCart={handleAddToCart}
                getTotalPrice={getTotalPrice}
              />
            }
          />
        </Routes>

        {/* ปุ่มไปยังหน้าชอปปิ้ง */}
        <div className="mt-4">
          <Link to="/cart" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
            Go to Shopping Cart
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default App;
