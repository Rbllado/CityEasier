var express = require("express");
var router = express.Router();
const City = require("./../models/CitiesModel");
const Restaurant = require("./../models/RestaurantModel");

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
  City.find({ name: req.params.nameCity })
    .populate("Museum")
    .populate("City")
    .then(detailMuseum => {
      res.render("placeType", { detailMuseum });
    })
    .catch(err => console.log(err));
});

router.get("/:nameCity/events", function(req, res, next) {
  City.find({ name: req.params.nameCity })

    .populate("Event")
    .then(detailEvents => {
      res.render("placeType", { detailEvents });
    })
    .catch(err => console.log(err));
});

router.get("/:nameCity/hotels", function(req, res, next) {
  City.find({ name: req.params.nameCity })

    .populate("Hotel")
    .then(detailHotel => {
      res.render("placeType", { detailHotel });
    })
    .catch(err => console.log(err));
});

module.exports = router;
