const yelp = require('yelp-fusion')
const yelpConfig = require('../yelpconfig')


const client = yelp.client(yelpConfig.token);

client.search({
  location: "Manhattan"
}).then((response) => {
  console.log(response.jsonBody.businesses[0]);
}).catch((err) => {
  console.log(err);
})
