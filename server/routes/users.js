'use strict';
var router = require('express').Router();
// var authController=require('../controllers/authController');
var userController=require('../controllers/userController');

router.get('/users', userController.getAllUsers);

router.delete('/users/:user_id', userController.deleteUser);

router.put('/users/:user_id', userController.editUser);

module.exports = router;
