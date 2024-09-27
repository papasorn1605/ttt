import React from "react";
import "../index.css"; // อย่าลืมนำเข้าไฟล์ CSS

const ProductList = ({ products, onAddToCart, cartItems, onDecreaseQuantity }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          // ค้นหาสินค้าในตะกร้า
          const cartItem = cartItems.find((item) => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0; // จำนวนสินค้าที่เลือก

          // คำนวณราคารวม
          const totalPrice = quantity * product.price;

          return (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image" // ใช้คลาส CSS ที่สร้างขึ้น
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">฿{product.price.toFixed(2)}</p>
                <div className="flex items-center mt-4">
                  {/* ปุ่มลบ */}
                  <button
                    onClick={() => onDecreaseQuantity(product.id)} // ใช้ฟังก์ชันลดจำนวนสินค้า
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                    disabled={quantity === 0} // ปิดใช้งานถ้าไม่มีสินค้า
                  >
                    -
                  </button>
                  {/* แสดงจำนวนสินค้า */}
                  <span className="text-lg mx-2">{quantity}</span>
                  {/* ปุ่มบวก */}
                  <button
                    onClick={() => onAddToCart(product)} // ใช้ฟังก์ชันเพิ่มสินค้า
                    className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition-colors duration-300"
                  >
                    +
                  </button>
                </div>
                {/* แสดงราคาสินค้ารวม */}
                {quantity > 0 && (
                  <p className="mt-2 text-lg text-gray-700">
                    Total: ฿{totalPrice.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
