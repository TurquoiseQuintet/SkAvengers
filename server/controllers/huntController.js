'use strict';
var knex = require('../db/knex');

function createhunt(req, res){
  //create new hunt
  var insertObj = {
    huntMaster_id: 3,
    name: req.body.name,
    expiration: undefined
  };
  knex('hunts').insert(insertObj).returning('id')
  .then(function(data){
    res.status(200).json({id: data[0].id});
  })
  .catch(function(err){
    res.status(500).json({err: err.message});
    console.log(err);
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
    expiration_time: req.body.expiration_time
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
  editHunt: editHunt
};
