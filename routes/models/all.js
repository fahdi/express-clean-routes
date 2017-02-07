const data = require('../../data/index.json');

module.exports = (req, res) => {
  const models = data.models;

  res.status(200).json({ models });
};