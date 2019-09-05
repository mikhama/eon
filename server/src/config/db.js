const name = 'eon';
const url = process.env.MONGOURL || 'mongodb://localhost:27017/eon';

module.exports = {
  name,
  url,
};
