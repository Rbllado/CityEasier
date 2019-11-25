const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Create schema for the users
const userSchema = new Schema({
    username : String,
    password: String, 
    mail: String, 
    favorites: [{type: Schema.Types.ObjectId , ref: "favourites"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
