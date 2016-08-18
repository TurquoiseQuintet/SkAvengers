
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('hunts-users');
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('hunts-users', function(table) {
    table.increments();
    table.integer('hunts_id');
    table.integer('users_id');
  });
};
