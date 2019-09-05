module.exports = (callback) => async (...args) => {
  try {
    return await callback(...args);
  } catch (error) {
    throw new Error(`DATABASE: ${error.errmsg}`);
  }
};
