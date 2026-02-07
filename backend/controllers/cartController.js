const products = require('../data/products.json');

let cart = [];

const addToCart = (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    if (quantity > product.stock) {
      return res.status(400).json({
        success: false,
        message: `Only ${product.stock} items available in stock`
      });
    }

    const existingCartItem = cart.find(item => item.productId === parseInt(productId));

    if (existingCartItem) {
      const newQuantity = existingCartItem.quantity + quantity;

      if (newQuantity > product.stock) {
        return res.status(400).json({
          success: false,
          message: `Cannot add more items. Only ${product.stock} available in stock`
        });
      }

      existingCartItem.quantity = newQuantity;
    } else {
      cart.push({
        productId: parseInt(productId),
        quantity: quantity,
        product: product
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product added to cart successfully',
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding product to cart',
      error: error.message
    });
  }
};

const getCart = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: cart.length,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching cart',
      error: error.message
    });
  }
};

const updateCartItem = (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const cartItem = cart.find(item => item.productId === parseInt(productId));

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }

    const product = products.find(p => p.id === parseInt(productId));

    if (quantity > product.stock) {
      return res.status(400).json({
        success: false,
        message: `Only ${product.stock} items available in stock`
      });
    }

    cartItem.quantity = quantity;

    res.status(200).json({
      success: true,
      message: 'Cart updated successfully',
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating cart',
      error: error.message
    });
  }
};

const removeFromCart = (req, res) => {
  try {
    const { productId } = req.body;

    const itemIndex = cart.findIndex(item => item.productId === parseInt(productId));

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }

    cart.splice(itemIndex, 1);

    res.status(200).json({
      success: true,
      message: 'Item removed from cart successfully',
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error removing item from cart',
      error: error.message
    });
  }
};

const clearCart = (req, res) => {
  try {
    cart = [];

    res.status(200).json({
      success: true,
      message: 'Cart cleared successfully',
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error clearing cart',
      error: error.message
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  updateCartItem,
  removeFromCart,
  clearCart
};
