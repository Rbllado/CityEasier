var express = require("express");
var router = express.Router();
var User = require("./../models/UserModel");

router.get("/", (req, res, next) => {
  // Get the id from req.query
  const { id } = req.query;

  console.log("id: ", id);

  // updateOne  User  -> id is on req.session.currentUSer
  // Id from  the currentUser
  const userId = req.session.currentUser._id;

  User.updateOne({ _id: userId }, { $pull: { "favorites": id } })

    // User.deleteOne({ _id: userId}, {$unset:{favorites: id}})

    .then(() => {
      // should be reload page when you press the button
      res.status(200).send({ message: "Remove it" });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
