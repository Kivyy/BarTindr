const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const yelp = require('yelp-fusion')
const yelpConfig = require('./yelpconfig')


const client = yelp.client(yelpConfig.token);

app.use(bodyParser.json());


app.get('/bars',(req,res) => {
  client.search({
    location: "Manhattan"
  }).then((response) => {
    res.send(response.jsonBody.businesses[0]);
  }).catch((err) => {
    res.send(404);
  })
})

app.listen(3000,(err) => {
  if(err){
    return console.log(err);
  }

  console.log('API server is listening to: ',3000)
})
