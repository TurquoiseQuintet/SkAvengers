
exports.up = function(knex, Promise) {
  return knex.schema.table('hunts-users', function(table) {
    table.integer('user_level');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('hunts-users', function(table) {
    table.dropColumn('user_level');
  });
};
