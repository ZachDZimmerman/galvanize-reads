var knex = require('./knex');
module.exports = {
  insertGenre: function (genre) {
    return knex('genre').insert({
      name: genre
    }, 'id');
  },
  listBook: function (id) {
    return knex('book').where('id', id).first();
  },
  listAllBooks: function() {
    return knex('book').select();
  },
  getGenre: function () {
    return knex('genre').select();
  },
  deleteBook: function (id) {
    return knex('book').where('id', id).del();
  },
  addBook: function (data) {
    if (data.genre_id[1]) {
      return this.insertGenre(data.genre_id[1])
      .then(function (id) {
        return knex('book').insert({
          title: data.title,
          genre_id: id[1],
          description: data.description,
          cover_url: data.cover_url
        });
      });
    } else {
      return knex('book').insert({
        title: data.title,
        genre_id: data.genre_id[0],
        description: data.description,
        cover_url: data.cover_url
      });
    }
  }
};
