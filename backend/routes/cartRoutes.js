const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');
const { validateCartItem } = require('../middleware/validation');

router.get('/', getCart);
router.post('/', validateCartItem, addToCart);
router.put('/', validateCartItem, updateCartItem);
router.delete('/', removeFromCart);
router.delete('/clear', clearCart);

module.exports = router;
