'use strict';
// var jwt = require('jsonwebtoken');
var knex = require('../db/knex');
var hash = require('./hash');
function deleteUser(req, res) {
    knex('users').where('id', req.params.user_id).delete()
    .then(function() {
      return knex('hunts_users').where('users_id', req.params.user_id).delete();
    })
    .then(function() {
      res.send("delete accomplished");
    })
    .catch(function(err) {
      res.send(err);
    });
}

function editUser(req, res) {
    knex('users').where('id', req.params.user_id).update({username: req.body.username, email: req.body.email, avatar: req.body.avatar, password: result})
    .then(function() {
      return knex('users').where('id', req.params.user_id)
    })
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.send(err);
    });
}

function getAllUsers(req, res) {
    knex('users')
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      res.send(err);
    });
}

function getUser(req, res) {
  knex('users').where('id', req.params.user_id)
  .then(function(data) {
    res.send(data[0]);
  })
  .catch(function(err) {
    res.send(err);
  });
}

module.exports = {
    deleteUser: deleteUser,
    editUser: editUser,
    getAllUsers: getAllUsers,
    getUser: getUser,
    getTasksForHunt: getTasksForHunt
};
