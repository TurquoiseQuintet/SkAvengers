'use strict';
var router = require('express').Router();

router.post('/', function(req, res, next){
  //create new hunt
});

router.get('/:hunt_id', function(req, res, next){
  //view specific hunt
});

router.get('/', function(req, res, next){
  //get all hunts for current user
});

router.delete('/:hunt_id', function(req, res, next){
  //delete specific hunt
});

router.put('/:hunt_id', function(req, res, next){
  //as an admin, edit specific hunt
});
module.exports = router;
