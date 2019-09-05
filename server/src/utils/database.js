const { MongoClient } = require('mongodb');
const db = require('../config/db');

module.exports = (new function connection() {
  this.client = new Promise((resolve, reject) => {
    MongoClient.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, (error, client) => {
      if (error) {
        reject(error);
        return;
      }
      const database = client.db(db.name);

      resolve(database);
    });
  }).catch((error) => global.console.log('DB CONNECTION ERROR =>', error.message));

  return this;
}());
