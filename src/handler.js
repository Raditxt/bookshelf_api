const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  try {
    const {
      name, year, author, summary,
      publisher, pageCount, readPage, reading,
    } = request.payload || {};

    // Validasi: Tanpa nama
    if (!name) {
      return h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      }).code(400);
    }

    // Validasi: readPage tidak boleh lebih besar dari pageCount
    if (readPage > pageCount) {
      return h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      }).code(400);
    }

    // Proses tambah buku
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    const newBook = {
      id, name, year, author, summary, publisher,
      pageCount, readPage, finished, reading,
      insertedAt, updatedAt,
    };

    books.push(newBook);

    return h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    }).code(201);
  } catch (error) {
    console.error('Error saat menambahkan buku:', error);
    return h.response({
      status: 'error',
      message: 'Buku gagal ditambahkan karena kesalahan server',
    }).code(500);
  }
};

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;
  
    let filteredBooks = books;
  
    // Filter berdasarkan name (non-case sensitive)
    if (name !== undefined) {
      filteredBooks = filteredBooks.filter((book) =>
        book.name.toLowerCase().includes(name.toLowerCase())
      );
    }
  
    // Filter berdasarkan reading (0 = false, 1 = true)
    if (reading !== undefined) {
      const isReading = reading === '1';
      filteredBooks = filteredBooks.filter((book) => book.reading === isReading);
    }
  
    // Filter berdasarkan finished (0 = false, 1 = true)
    if (finished !== undefined) {
      const isFinished = finished === '1';
      filteredBooks = filteredBooks.filter((book) => book.finished === isFinished);
    }
  
    const responseBooks = filteredBooks.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    }));
  
    return h.response({
      status: 'success',
      data: {
        books: responseBooks,
      },
    }).code(200);
  };
  
  
  const getBookByIdHandler = (request, h) => {
    const { bookId } = request.params;
  
    const book = books.find((b) => b.id === bookId);
  
    if (!book) {
      return h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      }).code(404);
    }
  
    return h.response({
      status: 'success',
      data: {
        book,
      },
    }).code(200);
  };
  
  const updateBookHandler = (request, h) => {
    const { bookId } = request.params;
    const {
      name, year, author, summary,
      publisher, pageCount, readPage, reading,
    } = request.payload || {};
  
    // Validasi: Tanpa nama
    if (!name) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      }).code(400);
    }
  
    // Validasi: readPage tidak boleh > pageCount
    if (readPage > pageCount) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      }).code(400);
    }
  
    const index = books.findIndex((book) => book.id === bookId);
  
    // Buku tidak ditemukan
    if (index === -1) {
      return h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
      }).code(404);
    }
  
    // Update buku
    const updatedAt = new Date().toISOString();
    const finished = pageCount === readPage;
  
    books[index] = {
      ...books[index],
      name, year, author, summary,
      publisher, pageCount, readPage, reading,
      updatedAt, finished,
    };
  
    return h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    }).code(200);
  };
  
  const deleteBookHandler = (request, h) => {
    const { bookId } = request.params;
  
    const index = books.findIndex((book) => book.id === bookId);
  
    // Buku tidak ditemukan
    if (index === -1) {
      return h.response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan',
      }).code(404);
    }
  
    // Hapus buku
    books.splice(index, 1);
  
    return h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }).code(200);
  };
  

// Implement handler lainnya nanti
module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookHandler,
  deleteBookHandler
};
