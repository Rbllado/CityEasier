var express = require('express');
var router = express.Router();

const City = require("./../models/CitiesModel");


// If we have localhost:3000/login we are going to authRoute.js
const auth = require("./authRoute");
const city = require("./cityRoute");
const placeType = require("./placeTypeRoute");
const singlePlace = require("./singlePlaceRoute");
const privateEdit = require("./editProfileRoute");
const privateProfile = require("./profileRoute")
const favourite = require("./favouriteRoute");
const favouriteDelete = require("./favouriteDeleteRoute");
// const signUp = require("./authRoute");


router.use("/auth", auth);

router.use("/city", city);

router.use("/placetype", placeType);

router.use("/singleplace", singlePlace);

router.use("/private/edit", privateEdit);

router.use("/private/profile", privateProfile);

router.use("/favourite", favourite);

router.use("/favouriteDelete", favouriteDelete);


// router.use("/auth", signUp);



/* GET home page. */
router.get('/', function (req, res, next) {
  City.find()
    .then((allCitiesFromDB) => {
      res.render('index', {
        allCitiesFromDB
      });

    })
    .catch((err) => console.log(err));
});

module.exports = router;