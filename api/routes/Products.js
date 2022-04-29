const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');

router.get('/allProducts', ProductsController.allProducts);
router.get('/allProducts/:id', ProductsController.productFindCategory);
router.get('/product/:id', ProductsController.productFind);
router.get('/search', ProductsController.searchProduct);
router.post('/product/:productId/review', ProductsController.writeReview);

// Admin routes

router.post('/newProduct', ProductsController.newProduct);

router.put('/product/:id', ProductsController.editProduct);

router.delete('/product/:id', ProductsController.deleteProduct);

module.exports = router;
