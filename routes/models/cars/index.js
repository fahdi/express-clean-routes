const cars = require('express').Router({ mergeParams: true });
const all = require('./all');
const single = require('./single');
const data = require('../../../data');
const findObject = require('../../../utils/findObject');

cars.get('/', all);
cars.get('/:carId', single);
cars.param('carId', findObject('car'));

module.exports = cars;
