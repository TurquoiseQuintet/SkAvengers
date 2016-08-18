
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.string('phone_number');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropColumn('phone_number');
  })
};
