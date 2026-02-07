const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById } = require('../controllers/productController');
const { validateProductId } = require('../middleware/validation');

router.get('/', getAllProducts);
router.get('/:id', validateProductId, getProductById);

module.exports = router;
