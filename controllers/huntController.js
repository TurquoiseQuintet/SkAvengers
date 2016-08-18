'use strict';
var knex = require('../db/knex');

function createhunt(req, res){
  //create new hunt
  var insertObj = {
    huntMaster_id: req.user.id,
    name: req.body.name,
    expiration: req.body.expiration
  };
  knex('hunts').insert(insertObj).returning('id')
  .then(function(data){
    res.status(200).send(data);
  })
  .catch(function(err){
    res.status(500).json({err: err.message});
    console.log(err);
  });
}

function HuntsUsers(req, res) {
  knex('hunts_users').where('hunts_id', req.params.hunt_id)
  .then(function(data) {
    res.send(data);
  });
}

function gethunt (req, res){
  //view specific hunt
  knex('hunts').where({id:req.params.hunt_id})
  .then(function(data){
    res.send(data[0]);
  })
  .catch(function(err){
    res.send(err);
  });
}

function getAllhunts (req, res){
 knex('hunts')
 .then(function(data){
   res.send(data);
 })
 .catch(function(err){
   res.send(err);
 });
}

function master(req, res) {
  knex('hunts').where('huntMaster_id', req.user.id)
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    res.send(err);
  });
}

function myHunts(req, res) {
  knex('hunts_users').where('users_id', req.user.id)
  .then(function(data) {
    var idarray = [];
    for (var i = 0; i < data.length; i++) {
      idarray.push(data[i].id);
    }
    return knex('hunts').whereIn('id', idarray);
  })
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    res.send(err);
  });
}

function deleteHunt(req, res){
  knex('hunts').where({id:req.params.hunt_id})
  .delete()
  .then(function() {
    return knex('hunts_users').where({hunts_id:req.params.hunt_id}).delete();
  })
  .then(function() {
    knex('tasks').where({hunt_id:req.params.hunt_id}).delete();
  })
  .then(function() {
    res.send('deleted a hunt');
  })
  .catch(function(err){
    res.send(err);
  });
}

function editHunt (req, res){
  //as an admin, edit specific hunt
  knex('hunts').where({id:req.params.hunt_id})
  .update({
    name: req.body.name,
    expiration: req.body.expiration
  })
  .then(function(){
    return knex('hunts').where('id', req.params.hunt_id)
  })
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err){
    res.send(err);
  });
}

module.exports={
  createhunt: createhunt,
  gethunt: gethunt,
  getAllhunts: getAllhunts,
  deleteHunt: deleteHunt,
  editHunt: editHunt,
  myHunts: myHunts,
  master: master
};
