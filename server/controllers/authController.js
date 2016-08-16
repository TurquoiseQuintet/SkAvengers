'use strict';
var jwt = require('jsonwebtoken');
var knex = require('../db/knex');
var hashing = require('../../lib/hash');
var bcrypt = require('bcrypt');

function addUser(req, res, next){
  hashing(req.body.password).then(function(result) {
            return knex('users').insert({
                username: req.body.username,
                email:req.body.email,
                hash: result,
                avatar:req.body.avatar
            });
      })
      .then(function(data){
        res.send(data);
      })
      .catch(function(err){
        res.send(err);
      });
    }

function checklogin (req, res, next){
  console.log(req.body);
  knex('users')
  .where({
    user:req.body.user
  })
  .then(function(data){
    if(data.length===1){
      bcrypt.compare(req.body.password, data[0].password, function(err, result){
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
          // id: result.id
        });
      }
        else{
          res.json("trouble loggin in");
        }
      });
    }
  })
  .catch(function(err){
    console.log(err);
  });
}





module.exports = {
  addUser: addUser,
  checklogin: checklogin
};
