import React from 'react';
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, applyCoupon } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <svg 
              className="mx-auto h-24 w-24 text-gray-400 mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <a 
              href="/" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Cart
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              onApplyCoupon={applyCoupon}
            />
            <div className="mt-8 flex justify-end">
              <a 
                href="/" 
                className="inline-block bg-gray-600 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors mr-4"
              >
                Continue Shopping
              </a>
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage; 