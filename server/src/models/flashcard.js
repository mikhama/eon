const { ObjectId } = require('mongodb');
const database = require('../utils/database');
const dbCatcher = require('../utils/dbCatcher');

const COLLECTION = 'flashcards';

module.exports.addFlashcard = dbCatcher(async ({ word, meaning }) => {
  const db = await database.client;

  const flashcard = {
    word,
    meaning,
  };

  const result = await db.collection(COLLECTION)
    .insertOne(flashcard);

  return result;
});

module.exports.updateFlashcard = dbCatcher(async ({ _id, word, meaning }) => {
  const db = await database.client;

  const flashcard = {
    word,
    meaning,
  };

  const result = await db.collection(COLLECTION)
    .replaceOne(
      { _id: { $eq: ObjectId(_id) } },
      { $set: flashcard },
      { upsert: true },
    );

  return result;
});

module.exports.getFlashcard = dbCatcher(async ({ _id }) => {
  const db = await database.client;

  const result = await db.collection(COLLECTION)
    .findOne({ _id: ObjectId(_id) });

  return result;
});

module.exports.findFlashcard = dbCatcher(async ({ word }) => {
  const db = await database.client;

  const result = await db.collection(COLLECTION)
    .find({ word })
    .toArray();

  return result;
});

module.exports.getFlashcards = dbCatcher(async () => {
  const db = await database.client;

  const result = await db.collection(COLLECTION)
    .find()
    .toArray();

  return result;
});

module.exports.deleteFlashcard = dbCatcher(async ({ _id }) => {
  const db = await database.client;

  const { result } = await db.collection(COLLECTION)
    .deleteOne({ _id: ObjectId(_id) });

  const isDeleted = Boolean(result.n);
  return isDeleted;
});
