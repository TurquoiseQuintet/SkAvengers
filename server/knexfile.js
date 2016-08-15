// Update with your config settings.
'use strict';

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://localhost/skavengers',
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://localhost/skavengers',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://localhost/skavengers',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
