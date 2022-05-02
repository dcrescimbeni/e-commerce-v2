const express = require('express');
const passport = require('passport');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController');

router.post(
  '/thanks/:id',
  passport.authenticate('jwt', { session: false }),
  OrdersController.createOrder
);

module.exports = router;
