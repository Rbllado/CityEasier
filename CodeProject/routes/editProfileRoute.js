// if the user is logged in, will be redirect on this page from Edit Profile from NAV

var express = require('express');
var router = express.Router();
var User = require("./../models/UserModel");

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

  router.post("/", (req, res, next) =>{
      const updateProfile = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
      };

      const newPassword = req.body.newPassword;
    User.update(username)
    .then( () => {

    })
    .catch( (err) => console.log(err));
  })
  
  
  
  module.exports = router;
