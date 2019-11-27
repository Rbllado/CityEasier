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
    img:
      "https://u.tfstatic.com/restaurant_photos/743/503743/169/612/anita-flow-vista-del-interior-fb0eb.jpg", //con url is working, with refrence to images not.
    contact: {
      address: "Barcelona",
      phone: 666834384
    },
    web:
      "https://www.anitaflow.com/?utm_source=tripadvisor&utm_medium=referral",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet ante id consectetur feugiat. Phasellus magna orci, vestibulum sagittis ante vel, mattis iaculis enim. Aliquam aliquam ornare tristique. Fusce porta euismod sapien, vitae tincidunt felis sodales a. Aliquam et consequat tortor, vel tincidunt turpis.
    Nullam vel tristique leo, non tempor velit. Nam at blandit purus. Sed tempus, mauris eu finibus ornare, purus odio sollicitudin orci, interdum congue turpis neque vitae nulla. Vestibulum vitae finibus massa.
    Sed lobortis nisl vel bibendum consectetur. Cras at quam ut arcu semper tempus. Pellentesque dolor urna, porta a mi non, tempus viverra leo. Maecenas ac nibh a erat sollicitudin rhoncus. Phasellus magna metus, fermentum et metus id, pellentesque cursus mi. Morbi metus risus, ullamcorper ac molestie ut, consectetur et nibh..
        `,
    comments: [
      {
        name: "nando",
        date: "2014-3-1",
        comment: "Good restaurant in Barcelona"
      }, 
      {
        name: "Barbara",
        date: "2014-3-1",
        comment: "Barcelona has nice restaurats, this one of the bests."
      }
    ]
  },

  {
    name: "RAO",
    type: "Spanish",
    rating: 8,
    img:
      "https://raobcn.com/wp-content/uploads/2019/11/rao-best-restaurant-in-barcelona.jpg",
    contact: {
      address: "Barcelona",
      phone: 677335678
    },
    web: "http://www.raobcn.com/?utm_source=tripadvisor&utm_medium=referral",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet ante id consectetur feugiat. Phasellus magna orci, vestibulum sagittis ante vel,
     mattis iaculis enim. Aliquam aliquam ornare tristique. Fusce porta euismod sapien, vitae tincidunt felis sodales a. Aliquam et consequat tortor, vel tincidunt turpis. Nullam vel tristique leo,
      non tempor velit. Nam at blandit purus. Sed tempus, mauris eu finibus ornare, purus odio sollicitudin orci, interdum congue turpis neque vitae nulla. Vestibulum vitae finibus massa. Sed lobortis nisl vel bibendum consectetur. Cras at quam ut arcu semper tempus. Pellentesque dolor urna, porta a mi non, tempus viverra leo. Maecenas ac nibh a erat sollicitudin rhoncus. Phasellus magna metus, fermentum et metus id, pellentesque cursus mi. Morbi metus risus, ullamcorper ac molestie ut, consectetur et nibh.
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
    img: "/images/CuisineParis.jpg",
    contact: {
      address: "Paris",
      phone: 677636262
    },
    web: "www.loremipsum.com",
    description:
      "Quisque id diam vel quam elementum pulvinar etiam non quam. Laoreet id donec ultrices tincidunt arcu non sodales. Facilisis gravida neque convallis a cras. Justo donec enim diam vulputate ut pharetra sit. Feugiat nisl pretium fusce id velit ut. Odio ut enim blandit volutpat maecenas.",
    comments: [
      {
        name: "chao",
        date: "2013-2-21",
        comment: "hao hao"
      }
    ]
  },

  {
    name: "Txirimiri",
    type: "Spanish",
    rating: 9,
    img: "https://txirimiri.com/Media/txirimiri/dayvo/bar.jpg", //con url is working, with refrence to images not.
    contact: {
      address: "Barcelona",
      phone: 663834484
    },
    web: "https://txirimiri.com/",
    description: `
    The greatest pintxos of el Born. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        `,
    comments: [
      {
        name: "Kuker",
        date: "2017-3-1",
        comment: "Wow, amazing food in Barcelona"
      }
    ]
  },
  {
    name: "baritalianfood",
    type: "Italian",
    rating: 9,
    img:
      "https://i2.wp.com/www.bartyapp.com/wp-content/uploads/2018/08/matisport2.jpg?fit=1451%2C758&ssl=1", //con url is working, with refrence to images not.
    contact: {
      address: "Barcelona",
      phone: 684832284
    },
    web: "http://www.sportsbaritalianfood.it/",
    description: `
    Italiano perfetto! Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque sit amet porttitor eget dolor morbi non. Ut tellus elementum sagittis vitae et. Laoreet non curabitur gravida arcu. Odio eu feugiat pretium nibh ipsum consequat nisl vel.
        `,
    comments: [
      {
        name: "Bonzo",
        date: "2018-3-1",
        comment: "pizza e dessert gourmet"
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
        {
          name: cityName
        },
        // should be in collection restaurants and Types_ObjectId because it is a refrence
        {
          $set: {
            restaurants: restaurantByCity[cityName]
          }
        }
      );
    });

    Promise.all(updatedCityPromises)
      .then(() => {
        mongoose.connection.close();
      })
      .catch(err => console.log(err));

    console.log("restaurantCityNames", restaurantCityNames);

    console.log("Inserted Restaurants : ", insertedRestaurants.length);
  })
  .catch(err => console.log(err));
