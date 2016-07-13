
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
        // Inserts seed entries
    knex('genre').insert({
      name: 'Python'
    }),
    knex('genre').insert({
      name: 'JavaScript'
    })
  ]);
};
