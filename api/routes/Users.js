const express = require('express');
const passport = require('passport');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const { checkAdmin } = require('../utils/authCheck');

// User routes

router.post('/register', UsersController.userCreate);

router.post('/login', UsersController.userLogin);

// router.get('/sucess', UsersController.userLogin);

router.get(
  '/details',
  passport.authenticate('jwt', { session: false }),
  UsersController.getOwnDetails
);
router.put(
  '/details',
  passport.authenticate('jwt', { session: false }),
  UsersController.editOwnUser
);

router.get('/logout', UsersController.userLogout);

router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  UsersController.getUser
);

// router.post('/sendMail', UsersController.sendEmail);

router.get(
  '/userOrders/:id',
  passport.authenticate('jwt', { session: false }),
  UsersController.getOrders
);

// Admin routes
router.get(
  '/user/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  UsersController.getOneUser
);
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  UsersController.getAllUsers
);
router.put(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  UsersController.editUser
);
router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  checkAdmin,
  UsersController.deleteUser
);

module.exports = router;
