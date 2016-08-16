'use strict';
// var jwt = require('jsonwebtoken');
var knex = require('../db/knex');
var hashing = require('../../lib/hash');

function deleteUser(req, res, next){
  knex('users').where({id:req.body.id}).delete()
  .then(
    knex('hunts_users').where({users_id:req.body.id}).delete()
  )
  .then(function(result){
    res.send("delete accomplished");
  })
  .catch(function(err){
    res.send(err);
  });
}

function editUser(req, res, next){
  hashing(req.body.password).then(function(result) {
  return knex('users').where({id:req.body.id})
  .update({
    username:req.body.username,
    email:req.body.email,
    avatar:req.body.avatar,
    password:result
  });
  })
  .then(function(result){
    res.send(result);
  })
  .catch(function(err){
    res.send(err);
  });
}

function getAllUsers(req, res, next){
  knex('users')
  .then(function(data){
    res.send(data);
  })
  .catch(function(err){
    res.send(err);
  });
}

module.exports={
  deleteUser:deleteUser,
  editUser: editUser,
  getAllUsers: getAllUsers
};
