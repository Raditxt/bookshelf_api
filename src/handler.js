const { nanoid } = require('nanoid');
const books = require('./books');

// Placeholder handler
const addBookHandler = (request, h) => {
  return h.response({
    status: 'success',
    message: 'Handler belum diimplementasikan',
  }).code(200);
};

// Implement handler lainnya nanti
const getAllBooksHandler = () => ({});
const getBookByIdHandler = () => ({});
const updateBookHandler = () => ({});
const deleteBookHandler = () => ({});

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookHandler,
  deleteBookHandler,
};
