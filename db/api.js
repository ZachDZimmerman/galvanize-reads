var knex = require('./knex');
module.exports = {
  listBook: function() {
    return knex('book').select();
  }
}
