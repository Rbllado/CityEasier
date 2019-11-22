//Done it,  We need try it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Restaurant = require("./../models/RestaurantModel");

// Create schema for the city
const restaurant = [
  {
    name: "Anita Flow",
    type: "Spanish",
    rating: 6,
    contact: [
      {
        addres: "Barcelona",
        phone: 666834384
      }
    ],
    web:
      "https://www.anitaflow.com/?utm_source=tripadvisor&utm_medium=referral",
    description: `
    Special food here.
        `,
    comments: [
      {
        name: "nando",
        date: "2014-3-1",
        comment: "Good restaurant in Barcelona"
      }
    ]
  },

  {
    name: "RAO",
    type: "Spanish",
    rating: 8,
    contact: [
      {
        addres: "Barcelona",
        phone: 677335678
      }
    ],
    web: "http://www.raobcn.com/?utm_source=tripadvisor&utm_medium=referral",
    description: `In Ráo we serve 🍽Modern Gourmet Tapas and "Platillos" - 
    medium sized dishes made with 🌟premium locally sourced seasonal products.
    `,
    comments: [
      {
        name: "rafa",
        date: "2019-9-21",
        comment: "Great restauran in barcelona"
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
    return Restaurant.create(restaurant);
})
.then( (insertedRestaurants) => {
    console.log("Inserted Restaurants : ", insertedRestaurants.length);
    mongoose.connection.close();
    
})
.catch( (err) => console.log(err));

// module.exports = Restaurant;
