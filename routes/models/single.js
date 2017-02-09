const data = require('../../data');

module.exports = (req, res) => {
  const modelId = req.params.modelId * 1;
  const model = data.models.find(m => m.id === modelId);

  res.status(200).json({ model });
};
