//Done it,  We need try it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = require("./../models/EventModel");

// Create schema for the city
const eventModel = new Schema(
  {
    name: "CATALONIA BORN",
    type: "Hotel",
    rating: 6,
    contact: [
      {
        addres: "Barcelona",
        phone: 666993299
      }
    ],
    web:
      "https://www.cataloniahotels.com/es/hotel/catalonia-born",
    description: `
    En el céntrico barrio de Barcelona El Born, una zona conocida por su ambiente artístico y animado, se encuentra este encantador hotel Catalonia Born.
     Un carismático edificio del siglo XIX, completamente restaurado, acoge nuestras instalaciones.
        `,
    comments: [
      {
        name: "Michal",
        date: "20.11.2020",
        comment: "Gran hotel"
      }
    ]
  },

  {
    name: "Hotel Ostias",
    type: "Hotel",
    rating: 4,
    contact: [
      {
        addres: "Barcelona",
        phone: 677332233
      }
    ],
    web: "https://www.hoteloasis.es/es/index.html",
    description: `What makes a desert beautiful is that somewhere it hides a well.`,
    comments: [
      {
        name: "clara",
        date: "10.6.2017",
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

module.exports = Hotel;
