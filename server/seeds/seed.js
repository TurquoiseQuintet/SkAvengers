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
          avatar: ''
        }),

        knex('users').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
        }),

        knex('users').insert({
          username: '',
          email: '',
          hash: '',
          avatar: ''
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
          username: '',
          email: '',
          hash: '',
          avatar: ''
        })
      ]);
    });
};
