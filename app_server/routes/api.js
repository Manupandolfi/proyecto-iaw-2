var express = require('express');
var router = express.Router();
const complejosApi = require('../controllers/api');

/* GET home page. */
router.get('/complejos', complejosApi.getComplejos);


module.exports = router;
