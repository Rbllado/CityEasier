const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Create schema for the museum
const museumModel = new Schema({
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

const Museum = mongoose.model("Museum", museumModel);

module.exports = Museum;

