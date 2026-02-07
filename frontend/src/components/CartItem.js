import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleQuantityChange = (newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (quantity > 0 && quantity <= item.stock) {
      updateQuantity(item.id, quantity);
    }
  };

  const incrementQuantity = () => {
    if (item.quantity < item.stock) {
      updateQuantity(item.id, item.quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">{formatPrice(item.price)}</p>
      </div>

      <div className="cart-item-quantity">
        <button
          className="quantity-button"
          onClick={decrementQuantity}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          className="quantity-input"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
          min="1"
          max={item.stock}
        />
        <button
          className="quantity-button"
          onClick={incrementQuantity}
          disabled={item.quantity >= item.stock}
        >
          +
        </button>
      </div>

      <div className="cart-item-total">
        <p className="item-total">{formatPrice(item.price * item.quantity)}</p>
      </div>

      <button
        className="remove-button"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
