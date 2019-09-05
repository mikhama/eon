const { CREATED, OK, NOT_FOUND } = require('http-status-codes');
const {
  addFlashcard,
  updateFlashcard,
  getFlashcard,
  getFlashcards,
  findFlashcard,
  deleteFlashcard,
} = require('../models/flashcard');
const catcher = require('../utils/catcher');

module.exports.postFlashcard = catcher(async (req, res, next) => {
  await addFlashcard(req.body);

  res.sendStatus(CREATED);
  next();
});

module.exports.putFlashcard = catcher(async (req, res, next) => {
  await updateFlashcard(req.body);

  res.sendStatus(OK);
  next();
});

module.exports.getFlashcard = catcher(async (req, res, next) => {
  const flashcard = await getFlashcard(req.params);

  if (!flashcard) {
    res.sendStatus(NOT_FOUND);
    return;
  }

  res.status(OK).send(flashcard);
  next();
});

module.exports.getFlashcards = catcher(async (req, res, next) => {
  const flashcards = await getFlashcards();

  if (!flashcards.length) {
    res.sendStatus(NOT_FOUND);
    return;
  }

  res.status(OK).send(flashcards);
  next();
});

module.exports.findFlashcard = catcher(async (req, res, next) => {
  const flashcards = await findFlashcard(req.params);

  if (!flashcards.length) {
    res.sendStatus(NOT_FOUND);
    return;
  }

  res.status(OK).send(flashcards);
  next();
});

module.exports.deleteFlashcard = catcher(async (req, res, next) => {
  const isDeleted = await deleteFlashcard(req.params);

  res.status(OK).send({ isDeleted });
  next();
});
