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
    img: "https://www.pinterest.es/pin/287456388698648894/",
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
    name: "Hotel Bagués",
    type: "Hotel",
    rating: 4,
    img: "https://q-cf.bstatic.com/images/hotel/max1024x768/151/151781366.jpg",
    contact: 
      {
        address: "Barcelona",
        phone: 677332233
      }
    ,
    web: "https://www.hotelbagues.com/#!es/el-hotel/",
    description: `What makes a desert beautiful is that somewhere it hides a well.`,
    comments: [
      {
        name: "clara",
        date: "2017-6-10",
        comment: "Very nice"
      }
    ]
  },

  {
    name: "Portofino",
    type: "Hotel",
    rating: "9.5",
    img: "https://q-cf.bstatic.com/images/hotel/max1024x768/214/214424507.jpg",
    contact: 
      {
        address: "Mallorca",
        phone: 688394939
      }
    ,
    web: "https://www.hotelurportofino.com/",
    description: `El UR Portofino se encuentra a solo 2 km del aeropuerto de Palma de Mallorca
     y a 100 metros de la playa. Ofrece una piscina grande al aire libre, bar y conexión WiFi gratuita.`,
    comments: [
      {
        name: "Michal",
        date: "2016-8-21",
        comment: "Very nice holydays in Mallorca"
      }
]
  }
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
