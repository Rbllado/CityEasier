// Done it, we need try it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = require("./../models/EventModel");
const City = require("./../models/CitiesModel");

// Create schema for the city
const event = [
  {
    name: "Fiesta de Gracia",
    type: "Party",
    rating: 8,
    img: "https://www.dodmagazine.es/wp-content/uploads/2018/11/fiestas-gracia-barcelona.jpg",
    contact:  
      {
        address: "Barcelona",
        phone: 666994499
      }
    ,
    web:
      "https://www.barcelona-tourist-guide.com/es/acontecimientos/gracia-festival/gracia-festival-barcelona.html",
    description: `
        La Fiesta de Gràcia is an eagerly awaited event in Barcelona's busy calendar. If you are in Barcelona in August make sure
        that you head to the up-town district of Gràcia to see what this unique festival is all about.
        `,
    comments: [
      {
        name: "Barcelona",
        date: "2019-11-14",
        comment: "DE puta madre"
      }
    ]
  },

  {
    name: "Sonar Music festival",
    type: "Festival",
    rating: 9,
    img: "https://www.billboard.com/files/styles/article_main_image/public/media/sonar-music-fest-billboard-1548.jpg",
    contact: 
      {
        address: "Barcelona",
        phone: 677332233
      }
    ,
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
        date: "2019-11-14",
        comment: "Amazing"
      }
    ]
  },

  {
    name: "Gira fuego Estopa",
    type: "music",
    rating: 9,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Estopa_2008.06.13_007.jpg/250px-Estopa_2008.06.13_007.jpg",
    contact: 
      {
        address: "Barcelona",
        phone: 6733455563
      }
    ,
    web: "https://www.estopa.com/",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet ante id consectetur feugiat.
     Phasellus magna orci, vestibulum sagittis ante vel, mattis iaculis enim. Aliquam aliquam ornare tristique. Fusce porta euismod sapien,
      vitae tincidunt felis sodales a. Aliquam et consequat tortor, vel tincidunt turpis. Nullam vel tristique leo, non tempor velit. Nam at blandit purus. Sed tempus, mauris eu finibus ornare, purus odio sollicitudin orci, interdum congue turpis neque vitae nulla. Vestibulum vitae finibus massa. Sed lobortis nisl vel bibendum consectetur. Cras at quam ut arcu semper tempus. Pellentesque dolor urna, porta a mi non, tempus viverra leo. Maecenas ac nibh a erat sollicitudin rhoncus. Phasellus magna metus, fermentum et metus id, pellentesque cursus mi.
     Morbi metus risus, ullamcorper ac molestie ut, consectetur et nibh.`,
    comments: [
      {
        name: "johny",
        date: "2019-12-14",
        comment: "Best conecrt in the world"
      }
]
  }
];




mongoose
.connect("mongodb://localhost:27017/CityEasier", {
    useNewUrlParser: true
})
.then(()=>{
    return Event.create(event);
})
.then( (insertedevents) => {
  console.log("Este base de datos >>>>>>", insertedevents);

  // Create empty object to serve as the index of cities
  // events is returned after event.create()
  const eventByCity = {};

  // Create property names in eventByCity for each city
  // insertedevents.forEach((event) => {

  insertedevents.forEach(event => {
    const cityName = event.contact.address;

    if (!eventByCity[cityName]) {
      eventByCity[cityName] = [];
      eventByCity[cityName].push(event._id);
    } else {
      eventByCity[cityName].push(event._id);
    }
  });

  // Check if we have object with city names and ids
  console.log(eventByCity);

  // Create an array of the key names (representing cities)
  const eventCityNames = Object.keys(eventByCity);

  const updatedCityPromises = eventCityNames.map(cityName => {

    return City.updateOne(
      { name: cityName },
      // should be in collection events and Types_ObjectId because it is a refrence 
      { $set: { events: eventByCity[cityName] } }
    )
  });

  Promise.all(updatedCityPromises)
      .then( () => {
        mongoose.connection.close();
      })
      .catch( (err) => console.log(err));

  console.log("eventCityNames", eventCityNames);

  console.log("Inserted events : ", insertedevents.length);

})
.catch(err => console.log(err));
