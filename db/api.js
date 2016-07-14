var knex = require('./knex');


module.exports = {
  listBookById: function (id) {
    return knex('book')
            .join('genre', 'book.genre_id', '=', 'genre.id')
            .select('book.id as id', 'book.title', 'genre.name as genre', 'book.description', 'book.cover_url')
            .where({'book.id': id})
            .first();
  },
  listAllBooks: function() {
    return knex('book')
            .join('genre', 'book.genre_id', '=', 'genre.id')
            .select('book.id as id', 'book.title', 'genre.name as genre', 'book.description', 'book.cover_url');
            // .orderBy('book.title', 'asc');
  },
  getGenre: function () {
    return knex('genre').select();
    // .orderBy('name', 'asc');

  },
  deleteBook: function (id) {
    return knex('book').where('id', id).del();
  },
  editBook: function (book, bookId) {
    return knex('book').where({id:bookId}).update(book);
  },
  addBook: function (book) {
    return knex('book').insert(book).returning('id');
  },
  listAllAuthors: function () {
    return knex('author').select();
  }
};
