const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const passport = require('passport');

const { checkAdmin } = require('../utils/authCheck');

router.get('/all', CategoryController.getCategories);

// Admin routes

router.post(
  '/newCategory',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  CategoryController.createCategory
);
router.put(
  '/category/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  CategoryController.editCategory
);
router.delete(
  '/category/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  CategoryController.deleteCategory
);

module.exports = router;
