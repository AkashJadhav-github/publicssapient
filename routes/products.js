var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/middlewares');
const productsController = require('../controllers/productsController');

// Create product
router.post('/', productsController.createProduct);

// Search products
// Retrieve a list of all products in the catalogue.
router.get('/', productsController.getAllProducts);
// Get details of a specific product by its ID.
router.get('/:productId', productsController.getProductById);
// Search for products based on various parameters like brand, category, price, color, size, seller etc.
router.post('/search', productsController.searchProduct);

// router.get('/display', middleware.allowIfLoggedin, productsController.display);

module.exports = router;
