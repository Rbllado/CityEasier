// if the user is logged in, will be redirect on this page from Edit Profile from NAV

var express = require('express');
var router = express.Router();

//i think it will be POST and we need to make sure that the user is logged in
router.get(("/", (req, res, next) => {
    res.redirect("/private/profile");
}))




module.exports = router;