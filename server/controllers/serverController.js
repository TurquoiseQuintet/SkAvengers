'use strict';
var jwt = require('jsonwebtoken');
var knex = require('../db/knex');

function deletetask (req, res, next){
  knex('tasks').where({id:req.body.id}).delete()
  .then(function(result){
    res.send("deleted", result);
  })
  .catch(function(err){
    res.send(err);
  });
}

function gettask (req, res, next){
  knex('tasks').where({id:req.body.id})
  .then(function(task){
    res.send(task);
  })
  .catch(function(err){
    res.send(err);
  });
}

function posttask(req,res, next){
  knex('task').insert({
    hunt_id:req.body.hunt_id,
    name:req.body.name,
    xp: req.body.xp,
    level_available: req.body.xp,
    completed:req.body.completed,
    unique: req.body.unique,
    location: req.body.location,
    expiration_time: req.body.expiration_time
  });
}
function edittask(req, res, next){
  knex('tasks').where({id:req.body.id})
  .update({
    name:req.body.name,
    xp:req.body.xp,
    level_available: req.body.level_available,
    completed: req.body.completed,
    location:req.body.location,
    expiration_time:req.body.expiration_time

  });
  .then(function(task){
    res.send(task);
  })
  .catch(function(err){
    res.send(err);
  });
}


module.exports = {
    gettask: gettask,
    deletetask: deletetask,
    posttask: posttask



};
