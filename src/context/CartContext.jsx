import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [couponApplied, setCouponApplied] = useState(false);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        
        // If new quantity is 0 or negative, remove the item
        if (newQuantity <= 0) {
          return prevItems.filter(item => item.id !== product.id);
        }
        
        // Otherwise update the quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      
      // If item doesn't exist and quantity is positive, add it
      if (quantity > 0) {
        return [...prevItems, { ...product, quantity }];
      }
      
      return prevItems;
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const applyCoupon = (code) => {
    if (code === 'WEB3BRIDGECOHORT') {
      setCouponApplied(true);
      return true;
    }
    return false;
  };

  const clearCart = () => {
    setCartItems([]);
    setCouponApplied(false);
  };

  const value = {
    cartItems,
    couponApplied,
    addToCart,
    updateQuantity,
    removeFromCart,
    applyCoupon,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext; 