'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users').del(),
    knex('tasks').del(),
    knex('hunts').del(),
    knex('hunts_users').del(),
    knex('users_tasks').del()
  ]).then(function(){

      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          username: 'hank',
          email: 'hank1@gmail.com',
          hash: '$2a$08$f7zWmIhBavhtGRvvBuyXdOzjEMrQKU0slLD1mMW4WPH5riIeSmdzW',
          avatar: 'http://cliparts.co/cliparts/6iy/ob4/6iyob4bBT.jpg',
          phone_number: '7202192338'
        }),

        knex('tasks').insert({
          id: 1,
          hunt_id: 1,
          name: 'breaststroke down and back',
          xp: 50,
          level_available: 100,
          unique: false,
          expiration: '2016-08-10T14:00'
        }),

        knex('hunts').insert({
          id: 1,
          huntMaster_id: 1,
          name: 'Swimming Pool',
          expiration: '2016-01-01T08:30',
        }),

        knex('hunts_users').insert({
          id: 1,
          hunts_id: 1,
          users_id: 1,
          experience: 0
        }),

        knex('users_tasks').insert({
          id: 1,
          users_id: 1,
          tasks_id: 1,
          completed: false
        })
      ])
    .then(function(){

      return Promise.all([

        knex('users').insert({
          id: 2,
          username: 'michelle',
          email: 'm23@gmail.com',
          hash: '$2a$08$f7zWmIhBavhtGRvvBuyXdOzjEMrQKU0slLD1mMW4WPH5riIeSmdzW',
          avatar: 'https://clc2.uniservity.com/GroupDownloadAttachment.asp?GroupId=20216615&AttachmentID=1821834',
          phone_number: '8047545559'
        }),

        knex('tasks').insert({
          id: 2,
          hunt_id: 1,
          name: 'high dive',
          xp: 100,
          level_available: 200,
          unique: false,
          expiration: '2016-08-10T14:00'
        }),

        knex('hunts').insert({
          id: 2,
          huntMaster_id: 2,
          name: 'Park',
          expiration: '2016-08-10T22:50',
        }),

        knex('hunts_users').insert({
          id: 2,
          hunts_id: 2,
          users_id: 2,
          experience: 0
        }),

        knex('users_tasks').insert({
          id: 2,
          users_id: 2,
          tasks_id: 4,
          completed: false
        })
      ])
    .then(function(){

      return Promise.all([

        knex('users').insert({
          id: 3,
          username: 'tom',
          email: 'tomd@gmail.com',
          hash: '$2a$08$f7zWmIhBavhtGRvvBuyXdOzjEMrQKU0slLD1mMW4WPH5riIeSmdzW',
          avatar: 'http://mitrarenov.com/cdn/images/testimoni/43056c4346f3a07ed17acb8ee6ae75db.jpg',
          phone_number:'8705801562'
        }),

        knex('tasks').insert({
          id: 3,
          hunt_id: 1,
          name: 'cannonball',
          xp: 200,
          level_available: 300,
          unique: false,
          expiration: '2016-08-10T14:00'
        }),

        knex('hunts').insert({
          id: 3,
          huntMaster_id: 3,
          name: 'House Chores',
          expiration: '2016-09-11T21:45',
        }),

        knex('hunts_users').insert({
          id: 3,
          hunts_id: 3,
          users_id: 3,
          experience: 0
        }),

        knex('users_tasks').insert({
          id: 3,
          users_id: 3,
          tasks_id: 7,
          completed: false
        })
      ])
    .then(function(){

      return Promise.all([

        knex('tasks').insert({
          id: 4,
          hunt_id: 2,
          name: 'find a note under the swingset',
          xp: 10,
          level_available: 100,
          unique: false,
          expiration: '2016-12-25T24:00'
        })
      ])
    .then(function(){

      return Promise.all([

        knex('tasks').insert({
          id: 5,
          hunt_id: 2,
          name: 'find a basket by a tree',
          xp: 20,
          level_available: 100,
          unique: false,
          expiration: '2016-12-25T24:00'
        })
      ])
    .then(function(){

      return Promise.all([

        knex('tasks').insert({
          id: 6,
          hunt_id: 2,
          name: 'find a toy at the top of the slide',
          xp: 30,
          level_available: 100,
          unique: false,
          expiration: '2016-12-25T24:00'
        })
      ])
    .then(function(){

      return Promise.all([

        knex('tasks').insert({
          id: 7,
          hunt_id: 3,
          name: 'mow the lawn',
          xp: 100,
          level_available: 100,
          unique: true,
          expiration: '2016-08-21T17:00'
        })
      ])
    .then(function(){

      return Promise.all([

        knex('tasks').insert({
          id: 8,
          hunt_id: 3,
          name: 'load the dishwasher',
          xp: 100,
          level_available: 100,
          unique: true,
          expiration: '2016-08-21T17:00'
        })
      ])
    .then(function(){

      return Promise.all([

        knex('tasks').insert({
          id: 9,
          hunt_id: 3,
          name: 'vacuum the house',
          xp: 100,
          level_available: 100,
          unique: true,
          expiration: '2016-08-21T17:00'
        })
      ]);
    });
  });
});
});
});
});
});
});
});
};
