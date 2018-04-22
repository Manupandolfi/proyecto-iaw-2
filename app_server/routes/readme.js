var express = require('express');
var router = express.Router();
var texto = "Esto es algo que se mostrara en el readme...";
router.get('/', function(req, res, next) {
  res.render('readme', { title: 'Readme' , texto});
});

module.exports = router;
