// if the user is logged in, will be redirect on this page from Edit Profile from NAV

var express = require('express');
var router = express.Router();
var User = require("./../models/UserModel");
const bcrypt = require("bcrypt");

const saltRounds = 10;

//i think it will be POST and we need to make sure that the user is logged in
// router.get(("/", (req, res, next) => {
//     res.redirect("/private/profile");
// }))


router.use((req, res, next) => {
    if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
      next(); // ==> go to the next route ---
    } 										//		|
    else {                          	//    |
        res.redirect("/auth/login");       	//    |
    }                                 //    |
  });										//		|
  // 		 ------------------------------------
  //         |
  //         V
  
  router.get("/", (req, res, next) => {
    res.render("private/edit");
  });


  // No esta terminado
  router.post("/", (req, res, next) =>{

  const { username, password: enteredPassword } = req.body;

  // Find the user by username
  User.findOne({ username })
    .then(userData => {
      // If - username doesn't exist - return error
      if (!userData) {
        res.render("auth/login", { errorMessage: "Username not found!" });
        return;
      }

      // If username exists - check if the password is correct
      const hashedPasswordFromDB = userData.password; // Hashed password saved in DB during signup

      const passwordCorrect = bcrypt.compareSync(
        enteredPassword,
        hashedPasswordFromDB
      );

      // If password is correct - create session (& cookie) and redirect

      if (passwordCorrect) {
        // Save the login in the session ( and create cookie )
        // And redirect the user

        // Should be de new Password from the form edit
      const password = req.body.newPassword;

        // > If username doesn't exist, generate salts and hash the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // > Create the user in the DB
      User.update({ username, password: hashedPassword })
        .then(newUserObj => {

          console.log("password corrects", passwordCorrect);
          console.log("Estoy password:" , password);
          
          req.session.currentUser = userData;
          res.redirect("/");
        })
        .catch(err => {
          res.render("auth/signup", {
            errorMessage: "Error while creating new username."
          });
        });
      }
    });
});

  
  
  
  module.exports = router;
