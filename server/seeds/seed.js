'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users').del(),
    knex('tasks').del(),
    knex('hunts').del(),
    knex('hunts-users').del()
  ]).then(function(){

      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          username: 'hank',
          email: 'hank1@gmail.com',
          hash: '1111',
          avatar: 'http://cliparts.co/cliparts/6iy/ob4/6iyob4bBT.jpg'
        }),

        knex('users').insert({
          username: 'michelle',
          email: 'm23@gmail.com',
          hash: '1111',
          avatar: 'https://clc2.uniservity.com/GroupDownloadAttachment.asp?GroupId=20216615&AttachmentID=1821834'
        }),

        knex('users').insert({
          username: 'tom',
          email: 'tomd@gmail.com',
          hash: '1111',
          avatar: 'http://mitrarenov.com/cdn/images/testimoni/43056c4346f3a07ed17acb8ee6ae75db.jpg'
        }),

        knex('tasks').insert({
          name: '',
          password: '',
          haircolor: ''
        }),

        knex('tasks').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('tasks').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('tasks').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('tasks').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('tasks').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('tasks').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('tasks').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('tasks').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('hunts').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('hunts').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('hunts').insert({
          huntMaster_id: '',
          name: '',
          hash: '',
          avatar: ''
        }),

        knex('hunts-users').insert({
          hunts_id: '',
          users_id: '',
          level_id: ''
        }),

        knex('hunts-users').insert({
          hunts_id: '',
          users_id: '',
          level_id: ''
        }),

        knex('hunts-users').insert({
          hunts_id: '',
          users_id: '',
          level_id: ''
        })
      ]);
    });
};
