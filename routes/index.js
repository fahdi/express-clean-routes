var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ message: 'Connected!' });
});

const models = require('./models');
const cars = require('./cars');

router.use('/models', models);
router.use('/cars', cars);

module.exports = router;
