const express = require('express');
const passport = require('passport');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');
const { checkAdmin } = require('../utils/authCheck');

router.get('/allProducts', ProductsController.allProducts);
router.get('/allProducts/:id', ProductsController.productFindCategory);
router.get('/product/:id', ProductsController.productFind);
router.get('/search', ProductsController.searchProduct);
router.post(
  '/product/:productId/review',
  passport.authenticate('jwt', { session: false }),
  ProductsController.writeReview
);

// Admin routes

router.post(
  '/newProduct',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  ProductsController.newProduct
);

router.put(
  '/product/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  ProductsController.editProduct
);

router.delete(
  '/product/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  ProductsController.deleteProduct
);

module.exports = router;
