const express = require('express');
const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = express.Router();

routes.post('/books', addBookHandler);
routes.get('/books', getAllBooksHandler);
routes.get('/books/:bookId', getBookByIdHandler);
routes.put('/books/:bookId', editBookByIdHandler);
routes.delete('/books/:bookId', deleteBookByIdHandler);

module.exports = routes;
