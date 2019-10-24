
// TODO: This file should be optionally include by server.js to 
// add  boilerplate for JWT token
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;

/**
 * Generate an Access Token for a chat application user - it generates a random
 * username for the client requesting a token, and takes a device ID as a query
 * parameter.
 */
app.get('/token', function(request, response) {
    var identity = randomName();
  
    // Create an access token which we will sign and return to the client,
    // containing the grant we just created.
    var token = new AccessToken(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_TOKEN_API_KEY,
      process.env.TWILIO_TOKEN_API_SECRET
    );
  
    // Assign the generated identity to the token.
    token.identity = identity;
  
    // Grant the access token Twilio Video capabilities.
    var grant = new VideoGrant();
    token.addGrant(grant);
  
    // Serialize the token to a JWT string and include it in a JSON response.
    response.send({
      identity: identity,
      token: token.toJwt()
    });
  });
  