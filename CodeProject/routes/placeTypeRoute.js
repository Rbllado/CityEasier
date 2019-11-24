var express = require("express");
var router = express.Router();
const City = require("./../models/CitiesModel");
const Restaurant = require("./../models/RestaurantModel");

/* GET localhost3000/placetype/:nombreCiudad/restaurantes. */
// Populate is not working, we need to fix it
router.get("/:nameCity/restaurants", function(req, res, next) {
  City.find({ name: req.params.nameCity }, (err, city) =>{
    
        Restaurant.populate(city, {path: "restaurants"},(err, detailRestaurant) => {
          // res.status(200).send(city);
          console.log(detailRestaurant[0].restaurants[0].contact.address);
          
          res.render("placeType", { detailRestaurant });
        }); 

  } )
  // .then(detailRestaurant => {
  //   // console.log(detailRestaurant[0].restaurants);
  //   res.render("placeType", { detailRestaurant });
  // })
  // .catch(err => console.log(err));



    // .then( (city) => { console.log("Que ciudad : ", city)
    //  })

    // .populate
    // ("Restaurant")


    // .exec(function(err, city) {
    //   if (err) return handleError(err);
    //   console.log("The  ", city[0].restaurants);
    // });




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
