/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
// var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/'));
// app.use(express.bodyParser( { keepExtensions: true, uploadDir: path.join(__dirname, '/upload') } ) );


// get the app environment from Cloud Foundry
// var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
// app.listen(appEnv.port, '0.0.0.0', function() {
app.listen(3005, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on port 3005");
});
