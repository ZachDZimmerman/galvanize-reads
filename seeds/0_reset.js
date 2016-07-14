
exports.seed = function(knex, Promise) {
return knex.raw('TRUNCATE book, genre RESTART IDENTITY CASCADE')
  .then(function () {
    return knex('book_author').del()
  .then(function () {
    return knex('author').del()
  .then(function () {
    return knex('book').del()
  .then(function () {
    return knex('genre').del();
        });
      });
    });
  });
};
