const express = require('express');
const passport = require('passport');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

// User routes

router.post('/register', UsersController.userCreate);

router.post('/login', UsersController.userLogin);

router.get('/sucess', UsersController.userLogin);

router.get('/details', UsersController.getOwnDetails);
router.put('/details', UsersController.editOwnUser);

router.get('/logout', UsersController.userLogout);

// ! Removed isAuth
router.get('/me', UsersController.getUser);

router.post('/sendMail', UsersController.sendEmail);

router.get('/userOrders/:id', UsersController.getOrders);

// Admin routes
router.get('/user/:id', UsersController.getOneUser);
router.get('/all', UsersController.getAllUsers);
router.put('/edit/:id', UsersController.editUser);
router.delete('/delete/:id', UsersController.deleteUser);

module.exports = router;
