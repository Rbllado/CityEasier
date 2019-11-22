var express = require('express');
var router = express.Router();




/* GET localhost3000/city/. */
router.get('/barcelona', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, hacer un find() --> y que sea el nombre barcelona.
    res.render("city", {city: "barcelona"});
  });

  /* GET localhost3000/city. */
router.get('/london', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, hacer un find() --> y que sea el nombre london.
    res.render("city", {city: "london"});
  });


  /* GET home page. */
router.get('/naples', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, hacer un find() --> y que sea el nombre naples.
    res.render("city", {city: "naples"});
  });



  /* GET home page. */
router.get('/paris', function(req, res, next) {
    // Conectar con la base de datos, y sacar valor por nombre
    // function que conecte con la base de datos, hacer un find() --> y que sea el nombre paris.
    res.render("city", {city: "paris"});
  });
  

  module.exports = router;