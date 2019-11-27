const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Create schema for the hotel
const hotelModel = new Schema({
    name: String,
    type: String,
    rating: Number,
    img: String, //ESto es nuevo
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

const Hotel = mongoose.model("Hotel", hotelModel);

module.exports = Hotel;

