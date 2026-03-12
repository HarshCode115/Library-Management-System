const express = require('express');
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks
} = require('../controllers/bookController');

router.route('/')
  .post(createBook)
  .get(getAllBooks);

router.route('/search')
  .get(searchBooks);

router.route('/:id')
  .get(getBookById)
  .put(updateBook)
  .delete(deleteBook);

module.exports = router;
