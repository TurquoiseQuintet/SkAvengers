'use strict';
var jwt = require('jsonwebtoken');
var knex = require('../db/knex');
var hashing = require('./hash');
var bcrypt = require('bcrypt');

function addUser(req, res, next){

  hashing(req.body.password).then(function(result) {
    console.log(req.body);
             knex('users').insert({
                username: req.body.username,
                email: req.body.email,
                hash: result,
                avatar: req.body.avatar
            })
            .then(function(data){
              console.log(data);
              res.json({"test": data});
            })
            .catch(function(err){
              console.log(err);
              res.json({err: "boo"});
            });
      })
      .then(function(data){
        res.json({"success":"Success"});
      })
      .catch(function(err){
        res.json({err:err});
      });
    }

function checklogin (req, res, next){
  console.log(req.body.email);
  knex('users')
  .where({
    email:req.body.email
  })
  .then(function(data){
    console.log(data[0].password);
    if(data.length===1){
      bcrypt.compare(req.body.password, data[0].hash, function(err, result){
        console.log(err, result);
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
