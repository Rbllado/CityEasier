//Done it,  We need try it

const mongoose = require("mongoose");

const Restaurant = require("./../models/RestaurantModel");
const City = require("./../models/CitiesModel");

// Create schema for the city
const restaurants = [
  {
    name: "Anita Flow",
    type: "Spanish",
    rating: 6,
    contact: {
      address: "Barcelona",
      phone: 666834384
    },
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
    contact: {
      address: "Barcelona",
      phone: 677335678
    },
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

  {
    name: "Cuisine Paris",
    type: "asian",
    rating: 8,
    contact: {
      address: "Paris",
      phone: 677636262
    },
    web: "www.hskjhsdfkjhsdfkds.com",
    description: "Asian paris",
    comments: [
      {
        name: "chao",
        date: "2013-2-21",
        comment: "hao hao"
      }
    ]
  }
];

mongoose
  .connect("mongodb://localhost:27017/CityEasier", {
    useNewUrlParser: true
  })
  .then(() => {
    return Restaurant.create(restaurants);
  })
  .then(insertedRestaurants => {
    console.log("Este base de datos >>>>>>", insertedRestaurants);

    // Create empty object to serve as the index of cities
    // restaurants is returned after Restaurant.create()
    const restaurantByCity = {};

    // Create property names in restaurantByCity for each city
    // insertedRestaurants.forEach((restaurant) => {

    insertedRestaurants.forEach(restaurant => {
      const cityName = restaurant.contact.address;

      if (!restaurantByCity[cityName]) {
        restaurantByCity[cityName] = [];
        restaurantByCity[cityName].push(restaurant._id);
      } else {
        restaurantByCity[cityName].push(restaurant._id);
      }
    });

    // Check if we have object with city names and ids
    console.log(restaurantByCity);

    // Create an array of the key names (representing cities)
    const restaurantCityNames = Object.keys(restaurantByCity);

    const updatedCityPromises = restaurantCityNames.map(cityName => {

      return City.updateOne(
        { name: cityName },
        // should be in collection restaurants and Types_ObjectId because it is a refrence 
        { $set: { restaurants: restaurantByCity[cityName] } }
      )
    });

    Promise.all(updatedCityPromises)
        .then( () => {
          mongoose.connection.close();
        })
        .catch( (err) => console.log(err));

    console.log("restaurantCityNames", restaurantCityNames);

    console.log("Inserted Restaurants : ", insertedRestaurants.length);

  })
  .catch(err => console.log(err));
