'use strict';
var router = require('express').Router();
// var authController=require('../controllers/authController');
var userController=require('../controllers/userController');

router.get('/', userController.getAllUsers);

router.get('/:user_id', userController.getUser);

router.delete('/:user_id', userController.deleteUser);

router.put('/:user_id', userController.editUser);

router.delete('/hunt/:user_id/:hunt_id', userController.deleteUserFromTask);



module.exports = router;
