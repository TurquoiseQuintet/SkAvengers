'use strict';
var knex = require('../db/knex');

function createhunt(req, res, next){
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

function gethunt (req, res, next){
  //view specific hunt
  //I think I need a returning * but am not sure how to use those will get help in AM
  knex('hunts').where({id:req.body.id})
  .join('hunts_users').where({'hunts.id': 'hunts_users.hunts_id'})
  .join('users').where({'hunts.users_id':'users.id'})
  .then(function(data){
    res.send(data);
  })
  .catch(function(err){
    res.send(err);
  });
});

function getAllhunts (req, res, next){
 knex('hunts')
 .then(function(data){
   res.send(data);
 })
 .catch(function(err){
   res.send(err);
 });
}

function deleteHunt(req, res, next){
  knex('hunts').where({id:req.params.id})
  .delete()
  .then(
    knex('hunts_users').where({hunts_id:req.params.id})
    .delete()
  )
  .then(
    knex('tasks').where({hunt_id:req.params.id})
    .delete()
  )
  .catch(function(err){
    res.send(err);
  });
}

function editHunt (req, res, next){
  //as an admin, edit specific hunt
  knex('hunts').where({id:req.params.id})
  .update({
    name: req.body.name,
    expiration_time: req.body.expiration_time
  })
  .then(function(result){
    res.send("updated", result);
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
