var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {   //El callback no deberia ser una funcion
  res.render('index', { title: 'Express' }); //sino una clase que ejecuta un metodo.
});

module.exports = router;
