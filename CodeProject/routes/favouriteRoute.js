// if the user is logged in, will be redirect on this page from Edit Profile from NAV

var express = require('express');
var router = express.Router();
var User = require("./../models/UserModel");

  
router.get("/", (req, res, next) =>{
    // Get the id from req.query
    const { id } = req.query;


    const userId = req.session.currentUser._id

    // updateOne  User  -> id is  on req.session.currentUSer

    User.updateOne({ _id: userId}, { $push: { favorites: id}})
      .then( () => {
          res.status(200).send({ message: 'Bruh'})
      })
      .catch( (err) => {
        res.status(400).send(err)
      });
    // Insert the id of the favourite into the user object


    // else res.status(400).send(err)


})
  
  module.exports = router;
