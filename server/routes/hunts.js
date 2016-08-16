'use strict';
var router = require('express').Router();
// var knex = require('../db/knex');
var huntController=require('../controllers/huntController');
router.post('/', huntController.createhunt);

router.get('/:hunt_id', huntController.gethunt);

router.get('/', huntController.getAllhunts);

router.delete('/:hunt_id', huntController.deleteHunt);

router.put('/:hunt_id', huntController.editHunt);

module.exports = router;
