const data = require('../../data');

module.exports = (req, res) => {
  const models = data.models;

  res.status(200).json({ models });
};
