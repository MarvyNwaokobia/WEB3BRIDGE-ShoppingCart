import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const App = () => {
  // Simple routing based on pathname
  const path = window.location.pathname;
  
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {path === '/cart' ? <CartPage /> : <HomePage />}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
