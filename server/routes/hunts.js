'use strict';
var router = require('express').Router();
var knex = require('../db/knex');
router.post('/', function(req, res, next){
  //create new hunt
  var insertObj = {
    huntmaster_id: req.user.id,
    name: req.body.name,
    expiration_time: req.body.time
  };
  knex('hunts').insert(insertObj).returning('id')
  .then(function(data){
    res.status(200).json({id: data[0].id});
  })
  .catch(function(err){
    res.status(500).json({err: err.message});
    console.log(err);
  });
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
