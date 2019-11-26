// Redirecciona a la ficha de un sitio.

var express = require('express');
var router = express.Router();

const Restaurant = require("./../models/RestaurantModel");
const Museum = require("./../models/MuseumModel");
const Hotel = require("./../models/HotelModel");
const Event = require("./../models/EventModel");

// Conectar con la base de datos, y sacar valor por nombre
// function que conecte con la base de datos, --> take value from name



router.get('/Barcelona/:nameRestaurant', function(req, res, next) {
  
  Restaurant.find({name: req.params.nameRestaurant})
  .then( (restaurant) => {
    res.render("singlePlace/restaurantDetail", {restaurant});
  })
  .catch( (err) => console.log(err));
});

/* GET localhost3000/singlePlace/. */
  router.get('/Museum/:nameMuseum', function(req, res, next) {
  
    Museum.find({name: req.params.nameMuseum})
    .then( (museum) => {
      res.render("singlePlace/museumDetail", {museum});
    })
    .catch( (err) => console.log(err));
  });

  router.get('/Event/:nameEvent', function(req, res, next) {
  
    Event.find({name: req.params.nameEvent})
    .then( (event) => {
      res.render("singlePlace/eventDetail", {event});
    })
    .catch( (err) => console.log(err));
  });

  router.get('/Hotel/:nameHotel', function(req, res, next) {
  
    Hotel.find({name: req.params.nameHotel})
    .then( (hotel) => {
      res.render("singlePlace/hotelDetail", {hotel});
    })
    .catch( (err) => console.log(err));
  });


  module.exports = router;

