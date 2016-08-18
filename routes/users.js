'use strict';
var router = require('express').Router();
// var authController=require('../controllers/authController');
var userController=require('../controllers/userController');

router.get('/', userController.getAllUsers);

router.get('/:user_id', userController.getUser);

router.delete('/:user_id', userController.deleteUser);

router.put('/:user_id', userController.editUser);

//
// <<<<<<< HEAD:server/routes/users.js
// =======
//
// >>>>>>> 45bc81ff080af61dd826b8cdd66ba4bfa9323696:routes/users.js
module.exports = router;
