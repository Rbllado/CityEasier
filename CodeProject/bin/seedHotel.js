//Done it,  We need try it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hotel = require("./../models/HotelModel");
const City = require("./../models/CitiesModel");



// Create schema for the city
const hotel = [
  {
    name: "CATALONIA BORN",
    type: "Hotel",
    rating: 6,
    contact: 
      {
        address: "Barcelona",
        phone: 666993299
      }
    ,
    web:
      "https://www.cataloniahotels.com/es/hotel/catalonia-born",
    description: `
    En el céntrico barrio de Barcelona El Born, una zona conocida por su ambiente artístico y animado, se encuentra este encantador hotel Catalonia Born.
     Un carismático edificio del siglo XIX, completamente restaurado, acoge nuestras instalaciones.
        `,
    comments: [
      {
        name: "Michal",
        date: "2020-11-20",
        comment: "Gran hotel"
      }
    ]
  },

  {
    name: "Hotel Ostias",
    type: "Hotel",
    rating: 4,
    contact: 
      {
        address: "Barcelona",
        phone: 677332233
      }
    ,
    web: "https://www.hoteloasis.es/es/index.html",
    description: `What makes a desert beautiful is that somewhere it hides a well.`,
    comments: [
      {
        name: "clara",
        date: "2017-6-10",
        comment: "Normal"
      }
    ]
  },

//   {
//     name: "String",
//     type: String,
//     rating: Number,
//     contact: [
//       {
//         addres: String,
//         phone: Number
//       }
//     ],
//     web: String,
//     description: String,
//     comments: [
//       {
//         name: String,
//         date: Date,
//         comment: String
//       }
// ]
//   }
];

mongoose
.connect("mongodb://localhost:27017/CityEasier", {
    useNewUrlParser: true
})
.then(()=>{
    return Hotel.create(hotel);
})
.then( (insertedHotel) => {
  console.log("Este base de datos >>>>>>", insertedHotel);

  // Create empty object to serve as the index of cities
  // restaurants is returned after Restaurant.create()
  const hotelByCity = {};

  // Create property names in hotelByCity for each city
  // insertedHotel.forEach((hotel) => {

  insertedHotel.forEach(hotel => {
    const cityName = hotel.contact.address;

    if (!hotelByCity[cityName]) {
      hotelByCity[cityName] = [];
      hotelByCity[cityName].push(hotel._id);
    } else {
      hotelByCity[cityName].push(hotel._id);
    }
  });

  // Check if we have object with city names and ids
  console.log(hotelByCity);

  // Create an array of the key names (representing cities)
  const hotelCityNames = Object.keys(hotelByCity);

  const updatedCityPromises = hotelCityNames.map(cityName => {

    return City.updateOne(
      { name: cityName },
      // should be in collection hotels and Types_ObjectId because it is a refrence 
      { $set: { hotels: hotelByCity[cityName] } }
    )
  });

  Promise.all(updatedCityPromises)
      .then( () => {
        mongoose.connection.close();
      })
      .catch( (err) => console.log(err));

})
.catch(err => console.log(err));
