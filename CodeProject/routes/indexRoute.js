var express = require('express');
var router = express.Router();


// If we have localhost:3000/login we are going to authRoute.js
const auth = require("./authRoute");
const city = require("./cityRoute");
const placeType = require("./placeTypeRoute");
const singlePlace = require("./singlePlaceRoute");
const privateEdit = require("./editProfileRoute");
const privateProfile = require("./profileRoute")
// const signUp = require("./authRoute");


router.use("/auth", auth);

router.use("/city", city);

router.use("/placetype", placeType);

router.use("/singleplace", singlePlace);

router.use("/private/edit", privateEdit);

router.use("/private/profile", privateProfile);


// router.use("/auth", signUp);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
