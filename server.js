'use strict';

/**
 * Load Twilio configuration from .env config file - the following environment
 * variables should be set:
 * process.env.TWILIO_ACCOUNT_SID
 * process.env.TWILIO_API_KEY
 * process.env.TWILIO_API_SECRET
 */
require('dotenv').load();

var http = require('http');
var express = require('express');

if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_ACCOUNT_SECRET) {
  console.log(
    'Twilio credentials missing. Create a file named .env based on .env.template and add your Twilio Project credentials'
  );
  return;
}
// Twilio initialization
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_ACCOUNT_SECRET
);

// Create Express webapp.
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Uncomment below to add your POST end point
// app.post('/post-end-point', function(request, response) {

// });

// Create http server and run it.
var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Express server running on *:' + port);
});
