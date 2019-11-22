// Login, Sign up, Logout

var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render("auth/login");
  });
  

  /* GET home page. */
router.get('/signup', function(req, res, next) {
    res.render("auth/signup");
  });
  
  module.exports = router;
  


// router.get(( "/", () =>{
//     res.session.destroy()
// }