// Redirecciona a la ficha de un sitio.

var express = require('express');
var router = express.Router();

const rest = require("./../models/RestaurantModel");


// Conectar con la base de datos, y sacar valor por nombre
// function que conecte con la base de datos, --> take value from name

/* GET localhost3000/placetype/. */
router.get('/:nameRestaurant', function(req, res, next) {

  rest.find({name: req.params.nameRestaurant})
  .then( (restaurant) => {

    
    
    res.render("singlePlace", {restaurant});
  })
  .catch( (err) => console.log(err));
});



  module.exports = router;

