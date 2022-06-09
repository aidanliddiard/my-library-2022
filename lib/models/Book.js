const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  author;
  finished;
  published;
  genre;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.author = row.author;
    this.finished = row.finished;
    this.published = row.published;
    this.genre = row.genre;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM books;');
    return rows.map(
      (row) => new Book({ id: row.id, title: row.title, author: row.author })
    );
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM books WHERE id=$1;', [id]);
    if (!rows[0]) return null;

    return new Book(rows[0]);
  }
};
