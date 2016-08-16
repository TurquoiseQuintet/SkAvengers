'use strict';
var router = require('express').Router();
var authController=require('../controllers/authController');
router.post('/', authController.addUser);

router.post('/auth', authController.checklogin);

router.get('/', function(req, res, next){
  //get all users
});

router.delete('/:user_id', function(req, res, next){
  //delete user
});

router.put('/:user_id', function(req, res, next){
  //edit user
});

module.exports = router;
