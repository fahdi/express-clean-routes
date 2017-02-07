var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({ message: 'Connected!' });
});

const models = require('./models');

router.use('/models', models);

module.exports = router;
