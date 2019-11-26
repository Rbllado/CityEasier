

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

      const { favorites } = user;

      const results = [];

      // return a promise that when resolved returns  an array of the elements that match
      const restaurantsPromise = Restaurant.find({ _id: { $in: favorites }});
      const museumPromise = Museum.find({ _id: { $in: favorites }});
      const eventPromise = Event.find({ _id: { $in: favorites }});
      const hotelPromise = Hotel.find({ _id: { $in: favorites }});

      Promise.all([restaurantsPromise, museumPromise, eventPromise, hotelPromise])
        .then( (resolvedFavourites) => {
          const restaurants = resolvedFavourites[0];
          const museums = resolvedFavourites[1];
          const events = resolvedFavourites[2];
          const hotels = resolvedFavourites[3];

          const allFavs = [...restaurants, ...museums, ...events, ...hotels]

          //  user: req.session.currentUser
          res.render("private/profile", { allFavs});


        })
        .catch( (err) => {});



        // Restaurant.populate(user, {path: "favorites"}, (err, restaurantByCity) =>{
            
        //     var arrayrestaurantsCity = restaurantByCity.favorites;  
        //     //res.render("private/profile", {arrayrestaurantsCity});
        //     console.log("dfgdfg: ",arrayrestaurantsCity);
            
        //     Museum.populate(user, {path: "favorites"}, (err, museumByCity) =>{
        //       const arraymuseumsCity = museumByCity.favorites; 

        //       console.log("Museum: ",arrayrestaurantsCity);

        //       const allFavs = [...arrayrestaurantsCity, ...arraymuseumsCity]
    
        //       // console.log("sdfksd: ", allFavs);
              
        //       res.render("private/profile", { allFavs });
        //   } )

        } )

    })

  // });

// router.get("/", isLoggedIn, (req, res, next) => {
    // const userId = req.session.currentUser._id;

    
  // });


  
  module.exports = router;
