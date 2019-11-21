// Done it, we need try it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = require("./../models/EventModel");

// Create schema for the city
const eventModel = new Schema(
  {
    name: "Fiesta de Gracia",
    type: "Party",
    rating: 8,
    contact: [
      {
        addres: "Tolo",
        phone: 666994499
      }
    ],
    web:
      "https://www.barcelona-tourist-guide.com/es/acontecimientos/gracia-festival/gracia-festival-barcelona.html",
    description: `
        La Fiesta de Gràcia is an eagerly awaited event in Barcelona's busy calendar. If you are in Barcelona in August make sure
        that you head to the up-town district of Gràcia to see what this unique festival is all about.
        `,
    comments: [
      {
        name: "Barcelona",
        date: "20.11.2018",
        comment: "DE puta madre"
      }
    ]
  },

  {
    name: "Sonar Music festival",
    type: "Festival",
    rating: 9,
    contact: [
      {
        addres: "Barcelona",
        phone: 677332233
      }
    ],
    web: "https://sonar.es/",
    description: `
        Sonar Music Festival in Barcelona has grown from strength to strength and 
        is now established as one of Europe's most well-known music festivals. 
        Each year, for one weekend in June, Barcelona is flooded by thousands of music fans from all over Europe.
         You can usually tell them by their over-sized sunglasses, on-trend flip flops
         and urgent march towards the festival site.`,
    comments: [
      {
        name: "Noa",
        date: "10.12.2019",
        comment: "Amazing"
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
);




// mongoose
// .connect("mongodb://localchost:27017/CityEasier", {
//     useNewUrlParser: true
// })
// .then(()=>{
//     return Event.create(cities);
// })
// .then( (insertedCities) => {
//     console.log("Inserted Cities : ", insertedCities.length);
//     mongoose.connection.close();
    
// })
// .catch( (err) => console.log(err));

module.exports = Event;
