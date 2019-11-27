var express = require("express");
var router = express.Router();
const City = require("./../models/CitiesModel");
const Restaurant = require("./../models/RestaurantModel");
const Museum = require("./../models/MuseumModel");
const Hotel = require("./../models/HotelModel");
const Event = require("./../models/EventModel");

/* GET localhost3000/placetype/:nombreCiudad/restaurantes. */

// To work with populate I needed the models that I want to populate. In this case City and Restaurant

router.get("/:nameCity/restaurants", function(req, res, next) {
  // Search into the city collection in the DB, the name that we have in the url.
  City.find({ name: req.params.nameCity }, (err, city) => {
    // Restauran collection to do the populate, inside the collections city the field restaurants
    Restaurant.populate(
      city,
      { path: "restaurants" },
      (err, restaurantsByCity) => {
        // res.status(200).send(city);
        // console.log(detallRest);
        const arrayRestaurantInCity = restaurantsByCity[0].restaurants;

        res.render("placeType", { arrayRestaurantInCity });
      }
    );
  });
});


router.get("/:nameCity/museums", function(req, res, next) {
  City.find({ name: req.params.nameCity }, (err, city) => {
    // Restauran collection to do the populate, inside the collections city the field restaurants
    Museum.populate(city, { path: "museums" }, (err, museumsByCity) => {

      const arrayMuseumInCity = museumsByCity[0].museums;

      res.render("placeType", { arrayMuseumInCity });
    });
  });
});

router.get("/:nameCity/events", function(req, res, next) {
  City.find({ name: req.params.nameCity }, (err, city) => {
    // Restauran collection to do the populate, inside the collections city the field restaurants
    Event.populate(city, { path: "events" }, (err, eventsByCity) => {
      
      const arrayEventInCity = eventsByCity[0].events;
      console.log(arrayEventInCity);
      

      res.render("placeType", { arrayEventInCity });
    });
  });
});

router.get("/:nameCity/hotels", function(req, res, next) {
  City.find({ name: req.params.nameCity }, (err, city) => {
    // Restauran collection to do the populate, inside the collections city the field restaurants
    Hotel.populate(city, { path: "hotels" }, (err, hotelsByCity) => {
      
      const arrayHotelInCity = hotelsByCity[0].hotels;

      res.render("placeType", { arrayHotelInCity });
    });
  });
});

module.exports = router;
