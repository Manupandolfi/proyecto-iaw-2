var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');

/* GET readme page. */
router.get('/', ctrlMain.readme);

module.exports = router;