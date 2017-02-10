const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');
const data = require('../../data');
const findObject = require('../../utils/findObject');

models.get('/', all);
models.get('/:modelId', single);
models.use('/:modelId/cars', cars);
models.param('modelId', findObject('model'));

module.exports = models;