# CityEasier

<br>

## Description

Application web to make easier your stay in a city. You will be able to find the most tyipical events, restaurants, museums and hotels in a city.

<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **Homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up.
- **Sign up** - As a user I want to sign up on the web page so that I can add favorite restaurants to my list.
- **Login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **Logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **Favorite list** - As a user I want to see the list of my favorite and delete them.
- **Edit user** - As a user I want to be able to edit my profile.
- **Restaurants listing** - As a user I want to see more details of the restaurant in a city, be able to see the rating, description and add to my favourites
- **Museums listing** - As a user I want to see more details of the museums in a city, be able to see the rating, description and add to my favourites
- **Events listing** - As a user I want to see more details of the events in a city, be able to see the rating, description and add to my favourites
- **Hotels listing** - As a user I want to see more details of the hotels in a city, be able to see the rating, description and add to my favourites

<br>

## API Routes (Back-end):

| **Method** | **Route**                     | **Description**                                                          | Request - Body                                           |
| ---------- | ----------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                           | Main page route. Renders home `index` view.                              |                                                          |
| `GET`      | `/login`                      | Renders `login` form view.                                               |                                                          |
| `POST`     | `/login`                      | Sends Login form data to the server.                                     | { email, password }                                      |
| `GET`      | `/logout`                     | Renders `index` form view.                                               |                                                          |
| `GET`      | `/signup`                     | Renders `signup` form view.                                              |                                                          |
| `POST`     | `/signup`                     | Sends Sign Up info to the server and creates user in the DB.             | { email, password }                                      |
| `GET`      | `/private/edit-profile`       | Private route. Renders `edit-profile` form view.                         |                                                          |
| `PUT`      | `/private/edit-profile`       | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`          | Private route. Render the `favorites` view.                              |                                                          |
| `POST`     | `/private/favorites/`         | Private route. Adds a new favorite for the current user.                 | { name, cuisine, city, }                                 |
| `DELETE`   | `/private/favorites/:OwnerId` | Private route. Deletes the existing favorite from the current user.      |                                                          |
| `GET`      | `/restaurants`                | Renders `restaurant-list` view.                                          |                                                          |
| `GET`      | `/restaurants/details/:id`    | Render `restaurant-details` view for the particular restaurant.          |                                                          |
| `GET`      | `/museums`                    | Renders `museums-list` view.                                             |                                                          |
| `GET`      | `/museums/details/:id`        | Render `museums-details` view for the particular museum.                 |                                                          |
| `GET`      | `/hotels`                     | Renders `hotels-list` view.                                              |                                                          |
| `GET`      | `/hotels/details/:id`         | Render `hotels-details` view for the particular hotel.                   |                                                          |
| `GET`      | `/events`                     | Renders `events-list` view.                                              |                                                          |
| `GET`      | `/events/details/:id`         | Render `events-details` view for the particular event.                   |                                                          |

## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  favorites: [FavoriteId],
}

```

Favorites model

```javascript
{
  placeId: String,
}

```

Cities model

```javascript
{
  name: String,
  img: String,
  restaurants: [RestaurantsId],
  museums: [MuseumsId],
  events: [EventsId],
  hotels: [HotelsId],
}

```

Restaurants model

```javascript
{
  name: String,
  type: String,
  rating: Number,
  contact: [{
    addres: String,
    phone: Number
  }]
  web: String,
  description: String,
  comments:[{
    name: String,
    date: Date,
    comment: String
  }]
}

```

Events model

```javascript
{
  name: String,
  type: String,
  rating: Number,
  contact: [{
    addres: String,
    phone: Number
  }]
  web: String,
  description: String,
  comments:[{
    name: String,
    date: Date,
    comment: String
  }]
}
```

Hotel model

```javascript
{
  name: String,
  type: String,
  rating: Number,
  contact: [{
    addres: String,
    phone: Number
  }]
  web: String,
  description: String,
  comments:[{
    name: String,
    date: Date,
    comment: String
  }]
}
```

Museum model

```javascript
{
  name: String,
  type: String,
  rating: Number,
  contact: [{
    addres: String,
    phone: Number
  }]
  web: String,
  description: String,
  comments:[{
    name: String,
    date: Date,
    comment: String
  }]
}
```

<br>

## Backlog

Trello

## Links

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Rbllado/CityEasier)

[Deploy Link]()

<br>

### Slides

The url to your presentation slides
