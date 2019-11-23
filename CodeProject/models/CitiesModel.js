const mongoose = require("mongoose");
const Schema = mongoose.Schema;





// Create schema for the city
const cityModel = new Schema({

        name: String,
        // img: String,
        restaurants: [{type: Schema.Types.ObjectId , ref: "Restaurant"}],
        museums: [{type: Schema.Types.ObjectId , ref: "Museum"}],
        events: [{type: Schema.Types.ObjectId , ref: "Event"}],
        hotels: [{type: Schema.Types.ObjectId , ref: "Hotel"}],
      
});

const City = mongoose.model("City", cityModel);

module.exports = City;

