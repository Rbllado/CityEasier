// Redirecciona a la ficha de un sitio.

var express = require('express');
var router = express.Router();



/* GET localhost3000/placetype/. */
router.get('/placename', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, --> take value from name
    res.render("singlePlace");
  });

 

  module.exports = router;

