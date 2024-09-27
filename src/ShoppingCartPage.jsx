// src/ShoppingCartPage.jsx
import React from "react";
import ShoppingCart from "./components/ShoppingCart";

const ShoppingCartPage = ({ cartItems, onRemoveFromCart, onDecreaseQuantity, onAddToCart, getTotalPrice }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <ShoppingCart
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onDecreaseQuantity={onDecreaseQuantity}
        onAddToCart={onAddToCart}
        getTotalPrice={getTotalPrice}
      />
    </div>
  );
};

export default ShoppingCartPage;
