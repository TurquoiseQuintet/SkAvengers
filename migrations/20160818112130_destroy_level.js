
exports.up = function(knex, Promise) {
  return knex.schema.table('hunts_users', function(table) {
    table.dropColumn('user_level');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('hunts_users', function(table) {
    table.integer('user_level');
  });
};
