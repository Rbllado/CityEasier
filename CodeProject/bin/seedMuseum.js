//Done it,  We need try it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Museum = require("./../models/MuseumModel");
const City = require("./../models/CitiesModel");
require('dotenv').config();

// Create schema for the city
const museums = [
  {
    name: "Museo Nacional de Arte de Cataluña",
    type: "Art",
    rating: 9,
    img: "https://cronicaglobal.elespanol.com/uploads/s1/29/30/68/7/museu-nacional-dart-catalunya.jpeg",
    contact: 
      {
        address: "Barcelona",
        phone: 666828384
      }
    ,
    web:
      "https://www.museunacional.cat/es",
    description: `
    The National Museum of Art of Catalonia, also known by its initials MNAC, 
    is located in the city of Barcelona. It stands out for its collection of Romanesque art, 
    specifically one of the most complete in the world. Its director is Josep Serra i Villalba.
        `,
    comments: [
      {
        name: "fernando",
        date: "2016-5-13",
        comment: "Best museum in Barcelona"
      }
    ]
  },

  {
    name: "Picasso museum",
    type: "Art",
    rating: 4,
    img: "http://www.bcn.cat/museupicasso/imatges/elmuseu/presentacio/sales1-museu-picasso-barcelona.jpg",
    contact: 
      {
        address: "Barcelona",
        phone: 677334566
      }
    ,
    web: "http://www.museupicasso.bcn.cat/es",
    description: `The Picasso Museum in Barcelona, officially and in Catalan Museu Picasso,
     has a collection of 4,249 works by the Malaga-born painter Pablo Picasso in the multiple
      media that addressed which is the most complete in the world in works of his youth. It is
       located on Montcada street in Barcelona
    `,
    comments: [
      {
        name: "Laura",
        date: "2018-5-3",
        comment: "Abstract art"
      }
    ]
  },

  {
    name: "Museum King Jan III in Wilanow",
    type: "String",
    rating: 9,
    img: "https://www.101viajes.com/sites/default/files/palacio-wilanow.jpg",
    contact:
      {
        address: "Warsaw",
        phone: 688483828
      }
    ,
    web: "https://warsawtour.pl/es/project/museo-palacio-de-wilanow/",
    description: `The Museum of King John III's Palace at Wilanów[1] (Polish: Muzeum Pałacu Króla Jana III w Wilanowie) is a museum in Warsaw,
     Poland considered to be one of the oldest in the country and the repository of the country's royal and artistic heritage`,
    comments: [
      {
        name: "Erik",
        date: "2018-4-23",
        comment: "Very nice Museum"
      }
]
  }
];





mongoose
 .connect(process.env.MONGODB_URI,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{
    return Museum.create(museums);
})
.then( (insertedMuseums) => {


  console.log("Este base de datos >>>>>>", insertedMuseums);

  // Create empty object to serve as the index of cities
  // museums is returned after museum.create()
  const museumByCity = {};

  // Create property names in museumByCity for each city
  // insertedMuseums.forEach((museum) => {

  insertedMuseums.forEach(museum => {
    const cityName = museum.contact.address;

    if (!museumByCity[cityName]) {
      museumByCity[cityName] = [];
      museumByCity[cityName].push(museum._id);
    } else {
      museumByCity[cityName].push(museum._id);
    }
  });

  // Check if we have object with city names and ids
  console.log(museumByCity);

  // Create an array of the key names (representing cities)
  const museumCityNames = Object.keys(museumByCity);

  const updatedCityPromises = museumCityNames.map(cityName => {

    return City.updateOne(
      { name: cityName },
      // should be in collection museums and Types_ObjectId because it is a refrence 
      { $set: { museums: museumByCity[cityName] } }
    )
  });

  Promise.all(updatedCityPromises)
      .then( () => {
        mongoose.connection.close();
      })
      .catch( (err) => console.log(err));

  console.log("museumCityNames", museumCityNames);

  console.log("Inserted museums : ", insertedMuseums.length);

})
.catch(err => console.log(err));

