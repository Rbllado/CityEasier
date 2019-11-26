const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Create schema for the users
const favouriteSchema = new Schema({
    placeId: String
});

const Favourite = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourite;

