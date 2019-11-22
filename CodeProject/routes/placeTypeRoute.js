var express = require('express');
var router = express.Router();



/* GET localhost3000/placetype/. */
router.get('/restaurants', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, hacer un find() --> y que sea el nombre barcelona. -->restuarantes
    res.render("placeType");
  });

  router.get('/museums', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, hacer un find() --> y que sea el nombre barcelona.
    res.render("placeType");
  });


  router.get('/events', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, hacer un find() --> y que sea el nombre barcelona.
    res.render("placeType");
  });

  router.get('/hotels', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, hacer un find() --> y que sea el nombre barcelona.
    res.render("placeType");
  });
  
  

  module.exports = router;