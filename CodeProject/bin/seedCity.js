// Done it, we need try


const mongoose = require("mongoose");

const Cities = require("./../models/CitiesModel");

const cities = [
  {
    name: "Barcelona",
    // img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },
  {
    name: "Londres",
    img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  },
  {
    name: "Naples",
    img: String,
    restaurants: [],
    museums: [],
    events: [],
    hotels: []
  }
];

mongoose
.connect("mongodb://localchost:27017/CityEasier", {
    useNewUrlParser: true
})
.then(()=>{
    return Cities.create(cities);
})
.then( (insertedCities) => {
    console.log("Inserted Cities : ", insertedCities.length);
    mongoose.connection.close();
    
})
.catch( (err) => console.log(err));