const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

module.exports = (callback) => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (error) {
    global.console.log('ERROR =>', error.message);

    res.sendStatus(INTERNAL_SERVER_ERROR);
    next();
  }
};
