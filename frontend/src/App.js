import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('products');

  return (
    <CartProvider>
      <div className="app">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="main-content">
          {currentPage === 'products' ? <ProductList /> : <Cart />}
        </main>

        <footer className="footer">
          <p>&copy; 2025 Naksh Jewels. All rights reserved.</p>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
