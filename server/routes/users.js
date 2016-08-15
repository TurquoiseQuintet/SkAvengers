'use strict';
var router = require('express').Router();

router.post('/', function(req, res, next){
  //create user
});

router.post('/auth', function(req, res, next){
  //authenticate user and login
});

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
