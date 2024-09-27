import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cartItems, onRemoveFromCart, onDecreaseQuantity, onAddToCart, getTotalPrice }) => {
  const shippingCost = 100; // ค่าขนส่ง

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300">
      <h2 className="text-2xl font-semibold mb-4 border border-gray-400 rounded-lg p-2 text-center text-black">
        Shopping Cart
      </h2>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-black">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4 border border-gray-300 rounded-lg p-2 bg-white text-black">
            <div>
              <p className="font-medium">{item.name}</p>
              <p>฿{item.price.toFixed(2)}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => onDecreaseQuantity(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md shadow-md"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => onAddToCart(item)}
                  className="px-2 py-1 bg-green-500 text-white rounded-md shadow-md"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className="text-red-500 font-medium"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <div className="mt-4 p-4 border border-gray-400 rounded-lg bg-gray-100 shadow-inner">
        <h3 className="text-lg font-bold text-center text-black">
          Total: ฿{getTotalPrice().toFixed(2)} (รวมค่าขนส่ง: ฿{shippingCost})
        </h3>
      </div>

      {/* ปุ่มกลับไปที่หน้าแรก */}
      <div className="mt-4">
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
          Back to Product List
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
