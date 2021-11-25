const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg')
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
})
/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return pool
  .query(`
  SELECT *
  FROM users
  WHERE email = $1
  `, [email.toLowerCase()])
  .then((result) => {
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool
  .query(`
  SELECT *
  FROM users
  WHERE id = $1
  `, [id])
  .then((result) => {
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  return pool
  .query(`
  INSERT INTO 
  users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;
  `, [user.name, user.email, '$2a$12$3Gdc3iFd1mxf99RxxP6ML.n0tIJp/bJ/5mBEfhfpO1P6cxJehtRoW'])
  .then((result) => {
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
  // const userId = Object.keys(users).length + 1;
  // user.id = userId;
  // users[userId] = user;
  // return Promise.resolve(user);
}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return pool
  .query(`
  SELECT reservations.*, properties.*, avg(property_reviews.rating) as average_rating
  FROM reservations
  JOIN properties ON reservations.property_id = properties.id
  JOIN property_reviews ON properties.id = property_reviews.property_id
  WHERE reservations.guest_id = $1
  GROUP BY reservations.id, properties.id
  LIMIT $2;
  `, [guest_id, limit])
  .then((result) => {
    console.log(result.rows);
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
  // return getAllProperties(null, 2);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 * {
  city,
  owner_id,
  minimum_price_per_night,
  maximum_price_per_night,
  minimum_rating;
  `
  WHERE city LIKE '%ancouv%'
  GROUP BY properties.id
  HAVING avg(property_reviews.rating) >= 4
  ORDER BY cost_per_night
  LIMIT 10;
  `
}
 */
const getAllProperties = function(options, limit = 10) {
  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;
  queryStringValues = [];
  // Check if city is added as filter
  if (options.city) {
    queryStringValues.push(options.city);
    queryString += `WHERE city LIKE $${queryStringValues.length} `;
  }
  // Check if owner_id is added as filter
  if (options.owner_id) {
    // If first filter added
    if (queryStringValues.length == 0) {
      queryStringValues.push(options.owner_id);
      queryString += `WHERE owner_id = $${queryStringValues.length} `;
    }
    queryStringValues.push(options.owner_id);
    queryString += `AND owner_id = $${queryStringValues.length} `;
  }
  // Check if min price per night is added as filter
  if (options.minimum_price_per_night) {
    // If first filter added
    if (queryStringValues.length == 0) {
      queryStringValues.push(options.minimum_price_per_night * 100);
      queryString += `WHERE cost_per_night > $${queryStringValues.length} `;
    }
    queryStringValues.push(options.minimum_price_per_night * 100);
    queryString += `AND cost_per_night > $${queryStringValues.length} `;
  }
  // Check if max price per night is added as filter
  if (options.maximum_price_per_night) {
    // If first filter added
    if (queryStringValues.length == 0) {
      queryStringValues.push(options.maximum_price_per_night * 100);
      queryString += `WHERE cost_per_night < $${queryStringValues.length} `;
    }
    queryStringValues.push(options.maximum_price_per_night * 100);
    queryString += `AND cost_per_night < $${queryStringValues.length} `;
  }
  // Check if rating is added as filter
  if (options.minimum_rating) {
    // If first filter added
    if (queryStringValues.length == 0) {
      queryStringValues.push(options.minimum_rating);
      queryString += `WHERE rating > $${queryStringValues.length} `;
    }
    queryStringValues.push(options.minimum_rating);
    queryString += `AND rating > $${queryStringValues.length} `;
  }
  // Add values guaranteed to terminate query
  queryStringValues.push(limit);
  queryString += `
  GROUP BY properties.id
  ORDER BY cost_per_night
  LIMIT $${queryStringValues.length};
  `;
  console.log(queryString, queryStringValues);
  return pool
  .query(queryString, queryStringValues)
  .then((result) => result.rows)
  .catch((err) => console.log(err.message));
};
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
