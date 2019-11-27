var express = require("express");
var router = express.Router();
const City = require("./../models/CitiesModel");
// const restaurants = require("./../models/RestaurantModel");

/* GET localhost3000/city/. */
// the best way is to take from the index one the name of the city
router.get("/barcelona", function(req, res, next) {
  // We connect to the databse and find the name from city that we have in the body

  City.find({ name: "Barcelona" })
    .then(city => {
      
      res.render("city", { city });
    })
    .catch(err => console.log(err));

  });

router.get("/naples", function(req, res, next) {

  // We connect to the databse and find the name from city that we have in the body
  City.find({ name: "Naples" })
    .then(city => {
      res.render("city", { city });
    })
    .catch(err => console.log(err));
});

/* GET home page. */
router.get("/paris", function(req, res, next) {
  // We connect to the databse and find the name from city that we have in the body
  City.find({ name: "Paris" })
    .then(city => {
      res.render("city", { city });
    })
    .catch(err => console.log(err));
});

router.get("/warsaw", function(req, res, next) {
  // We connect to the databse and find the name from city that we have in the body
  City.find({ name: "Warsaw" })
    .then(city => {
      res.render("city", { city });
    })
    .catch(err => console.log(err));
});


router.get("/Mallorca", function(req, res, next) {
  // We connect to the databse and find the name from city that we have in the body
  City.find({ name: "Mallorca" })
    .then(city => {
      res.render("city", { city });
    })
    .catch(err => console.log(err));
});

router.get("/Amsterdam", function(req, res, next) {
  // We connect to the databse and find the name from city that we have in the body
  City.find({ name: "Amsterdam" })
    .then(city => {
      res.render("city", { city });
    })
    .catch(err => console.log(err));
});

router.get("/Berlin", function(req, res, next) {
  // We connect to the databse and find the name from city that we have in the body
  City.find({ name: "Berlin" })
    .then(city => {
      res.render("city", { city });
    })
    .catch(err => console.log(err));
});

//   /* GET localhost3000/city. */
// router.get('/london', function(req, res, next) {
//     // Conectar con la base de datos, y sacar valor por nombre
//     // function que conecte con la base de datos, hacer un find() --> y que sea el nombre london.
//     res.render("city", {city: "london"});
//   });

module.exports = router;
