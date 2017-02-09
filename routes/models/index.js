const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');
const data = require('../../data');


models.get('/', all);

models.get('/:modelId', single);
models.use('/:modelId/cars', cars);

models.param('modelId', (req, res, next, value) => {
  const model = data.models.find(m => m.id === (value * 1));

  if (model) {
    req['model'] = model;
    next();
  } else {
  	res.status(404).json({ message: 'Invalid model ID' });    
  }
});

module.exports = models;
