const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.get('/all', CategoryController.getCategories);

// Admin routes

router.post('/newCategory', CategoryController.createCategory);
router.put('/category/:id', CategoryController.editCategory);
router.delete('/category/:id', CategoryController.deleteCategory);

module.exports = router;
