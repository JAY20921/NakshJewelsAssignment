import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header = ({ currentPage, setCurrentPage }) => {
  const { getCartCount } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Naksh Jewels</h1>
          <p className="tagline">Premium Jewelry Collection</p>
        </div>

        <nav className="nav">
          <button
            className={`nav-button ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => setCurrentPage('products')}
          >
            Products
          </button>
          <button
            className={`nav-button cart-button ${currentPage === 'cart' ? 'active' : ''}`}
            onClick={() => setCurrentPage('cart')}
          >
            Cart
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
