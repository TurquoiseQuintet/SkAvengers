'use strict';
var jwt = require('jsonwebtoken');
var knex = require('../db/knex');
var hash = require('./hash');
var bcrypt = require('bcrypt');

function addUser(req, res, next) {
    hash(req.body.password)
        .then(function(result) {
            return knex('users').insert({
                username: req.body.username,
                email: req.body.email,
                hash: result,
                avatar: req.body.avatar
            }).returning('*')
        })
        .then(function(data) {
          console.log(data);
          var profile = {
              data:data.id,
              username: data.username,
              email: data.email,
              avatar: data.avatar
          };
          var token = jwt.sign(profile, process.env.SECRET, {expiresIn: 432000});
          res.status(200).json({
              token: token
          });
            res.send(data);
        })
        .catch(function(err) {
            res.send(err);
        });
}

function checklogin (req, res, next){
  knex('users')
  .where('username', req.body.username)
  .then(function(data){
    bcrypt.compare(req.body.password, data[0].hash, function(err, result){
      if(result){
        var profile= {
          username: data[0].username,
          id: data[0].id,
          email:data[0].email,
          avatar:data[0].avatar
      };
      var token =jwt.sign(profile, process.env.SECRET);
      res.status(200).json({
        token:token
        });
      }
      else {
        console.log(err);
      }
    });
  })
  .catch(function(err){
    console.log(err);
  });
}




module.exports = {
    addUser: addUser,
    checklogin: checklogin
};
