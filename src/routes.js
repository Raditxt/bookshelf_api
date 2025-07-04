const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookHandler,
  deleteBookHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookHandler,
  },
  {
    method: "DELETE",

    path: "/books/{bookId}",
    handler: deleteBookHandler,
  },
];
console.log("addBookHandler:", addBookHandler);
module.exports = routes;
