const express = require('express');
const passport = require('passport');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const { isAuth, isAdmin } = require('../utils/authCheck');

// User routes

router.post('/register', UsersController.userCreate);

router.post(
  '/login',
  passport.authenticate('local'),
  UsersController.userLogin
);

router.get('/details', isAuth, UsersController.getOwnDetails);
router.put('/details', isAuth, UsersController.editOwnUser);

router.get('/logout', UsersController.userLogout);

router.get('/me', isAuth, UsersController.getUser);

router.post('/sendMail', UsersController.sendEmail);

router.get('/userOrders/:id', UsersController.getOrders);

// Admin routes
router.get('/user/:id', isAuth, isAdmin, UsersController.getOneUser);
router.get('/all', isAuth, isAdmin, UsersController.getAllUsers);
router.put('/edit/:id', isAuth, isAdmin, UsersController.editUser);
router.delete('/delete/:id', isAuth, isAdmin, UsersController.deleteUser);

module.exports = router;
