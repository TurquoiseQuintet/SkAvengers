'use strict';
var knex = require('../db/knex');

router.get('/:hunt_id', function(req, res) {
  knex('hunts_users').where('hunts_id', req.params.hunt_id)
  .then(function(data) {
    data = data.sort(function(a,b) {
      if (a.experience < b.experience) {
        return -1;
      }
      return 1;
    });
    res.send(data);
  })
  .catch(function(err) {
    console.log(err);
  });
});

module.exports={
};
