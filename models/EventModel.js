const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Create schema for the Evento
const eventModel = new Schema({
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
      date: {type: Date, default: Date.now },
      comment: String
    }]
});

const Event = mongoose.model("Event", eventModel);

module.exports = Event;

