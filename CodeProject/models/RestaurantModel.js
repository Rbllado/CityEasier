const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Create schema for the restuarant
const restauranModel = new Schema({
    name: String,
    type: String,
    rating: Number,
    contact: {
      address: String,
      phone: Number
    },
    web: String,
    description: String,
    comments:[{
      name: String,
      date: Date,
      comment: String
    }]
});

const Restaurant = mongoose.model("Restaurant", restauranModel);

module.exports = Restaurant;

