var express = require('express');
var router = express.Router();
const complejosApi = require('../controllers/complejosAPI');

/* GET home page. */
router.get('/complejos', complejosApi.getComplejos);

module.exports = router;