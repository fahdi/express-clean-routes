const cars = require('express').Router({ mergeParams: true });
const all = require('./all');
const data = require('../../../data');
const findObject = require('../../../utils/findObject');

cars.get('/', all);

module.exports = cars;
