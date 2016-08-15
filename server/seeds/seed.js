'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {

      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          name: 'Han Solo',
          password: '111',
          haircolor: 'brown',
        }),

        knex('users').insert({
          name: 'Luke Skywalker',
          password: '222',
          haircolor: 'light brown'
        }),

        knex('users').insert({
          name: 'C3PO',
          password: '333',
          haircolor: 'gold'
        }),

        knex('users').insert({
          name: 'Obi-wan Kenobi',
          password: '444',
          haircolor: 'white'
        })
      ]);
    });
};
