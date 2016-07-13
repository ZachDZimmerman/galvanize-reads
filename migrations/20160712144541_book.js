exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments();
    table.string('title').notNullable();
    table.integer('genre_id').references('id').inTable('genre').onDelete('cascade');
    table.text('description').notNullable();
    table.text('cover_url').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')

};
