const router = require('express').Router();
const yelp = require('yelp-fusion')
const configKey = require('../services/keys')


const client = yelp.client(configKey.yelp.token);


router.get('/bars',(req,res) => {
  client.search({
    location: "Manhattan"
  }).then((response) => {
    res.send(response.jsonBody.businesses[0]);
  }).catch((err) => {
    res.send(404);
  })
})

module.exports = router;
