var express = require('express');
var router = express.Router();
const complejosApi = require('../controllers/api');
var middleware = require('../auth/middleware');


/* GET home page. */
router.get('/complejos', complejosApi.getComplejos);
router.get('/comentarios/:id',complejosApi.getComentarios);
router.post('/comentarlo', middleware,complejosApi.comentarlo);
router.get('/get-estilo/',middleware,complejosApi.getEstilo);
router.get('/set-estilo/:nro',middleware,complejosApi.setEstilo);
module.exports = router;
