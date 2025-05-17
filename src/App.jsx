import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { products } from './data/products';

const ShoppingCart = () => {
  const { cartItems, addToCart, updateQuantity, removeFromCart, applyCoupon } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </div>

            {/* Cart Sidebar */}
            <div className="lg:col-span-1">
              <Cart
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
                onApplyCoupon={applyCoupon}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <ShoppingCart />
    </CartProvider>
  );
};

export default App;
