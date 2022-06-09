const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingBook = await Book.getById(id);
    res.json(matchingBook);
  })
  .get('/', async (req, res) => {
    const dataBooks = await Book.getAll();
    res.json(dataBooks);
  });
