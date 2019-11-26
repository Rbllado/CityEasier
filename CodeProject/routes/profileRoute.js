

// Va a redireccionar a /private/profile.hbs --> donde tendremos el perfil de usuario.var express = require('express');


var express = require('express');
var router = express.Router();
var User = require("./../models/UserModel");
const Restaurant = require("./../models/RestaurantModel");
const Museum = require("./../models/MuseumModel");
const Hotel = require("./../models/HotelModel");
const Event = require("./../models/EventModel");


  
  // USE (HORIZONTAL)
const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
      next();
    }
    else {
        res.redirect("/auth/login");
    }  
  }
  

//   Aqui tratar de mostrar museos, eventos y hoteles también
// It is only showing the Restrautant nowç
  router.get("/", isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id;

    User.findById(userId, (err, user) =>{
        Restaurant.populate(user, {path: "favorites"}, (err, restaurantByCity) =>{
            
            var arrayrestaurantsCity = restaurantByCity.favorites;  
            

            res.render("private/profile", {arrayrestaurantsCity});
            
        } )
    })

  });

router.get("/", isLoggedIn, (req, res, next) => {
    const userId = req.session.currentUser._id;

    User.findById(userId, (err, user) =>{
          Museum.populate(user, {path: "favorites"}, (err, museumByCity) =>{
              const arraymuseumsCity = museumByCity.favorites;  

              res.render("private/profile", {arraymuseumsCity});
          } )
      })
  });


  
  module.exports = router;
