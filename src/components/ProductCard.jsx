import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onAddToCart }) => {
  const { cartItems } = useCart();
  const isInCart = cartItems.some(item => item.id === product.id);
  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="relative h-48 mb-4 overflow-hidden rounded-md">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
          }}
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      {isInCart ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onAddToCart(product, -1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              -
            </button>
            <span className="font-medium">{cartItem.quantity}</span>
            <button
              onClick={() => onAddToCart(product, 1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onAddToCart(product, -cartItem.quantity)}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            Remove
          </button>
        </div>
      ) : (
        <button
          onClick={() => onAddToCart(product, 1)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard; 