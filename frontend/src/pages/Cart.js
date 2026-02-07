import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, clearCart, getCartTotal } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Add some beautiful jewelry to your cart to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="clear-cart-button" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>

          <div className="summary-row">
            <span>Shipping:</span>
            <span className="free-shipping">Free</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total">
            <span>Total:</span>
            <span>{formatPrice(getCartTotal())}</span>
          </div>

          <button className="checkout-button">
            Proceed to Checkout
          </button>

          <p className="secure-checkout">
            Secure Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
