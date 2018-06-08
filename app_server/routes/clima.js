var express = require('express');
var router = express.Router();
const climaController = require('../controllers/clima');

router.get('/', climaController.getClima);

module.exports = router;
