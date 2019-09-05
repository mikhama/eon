const express = require('express');
const {
  postFlashcard,
  putFlashcard,
  getFlashcard,
  getFlashcards,
  findFlashcard,
  deleteFlashcard,
} = require('../controllers').flashcard;

const router = express.Router();

router.post('/flashcard', postFlashcard);
router.put('/flashcard', putFlashcard);
router.delete('/flashcard/:_id', deleteFlashcard);
router.get('/flashcard/:_id', getFlashcard);
router.get('/flashcards', getFlashcards);
router.get('/flashcards/:word', findFlashcard);

module.exports = router;
