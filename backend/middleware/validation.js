const validateCartItem = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId) {
    return res.status(400).json({
      success: false,
      message: 'Product ID is required'
    });
  }

  if (!quantity || typeof quantity !== 'number' || quantity < 1) {
    return res.status(400).json({
      success: false,
      message: 'Valid quantity is required (must be a number greater than 0)'
    });
  }

  if (!Number.isInteger(quantity)) {
    return res.status(400).json({
      success: false,
      message: 'Quantity must be an integer'
    });
  }

  next();
};

const validateProductId = (req, res, next) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: 'Valid product ID is required'
    });
  }

  next();
};

module.exports = {
  validateCartItem,
  validateProductId
};
