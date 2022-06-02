// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//starter endpoint
app.get('/beyourself', function(request, response) {
  response.send('learn more and more');
});

//starter endpoint
app.get('/benormal', function(request, response) {
  response.send('writes code and words');
});

app.get('/maldi', function(request, response) {
  response.send('White sandy beach');
});

//groucho endpoint - note the \ escape character before ' quotes to distinguish from the enclosing quotes
app.get('/groucho', function(request, response) {
  response.send('outside of a dog a book is a man\'s best friend, inside of a dog, it\'s too dark to read');
});

//add your endpoint here - use the 'get' method and give it a unique name (check the name hasn't already been used)
//inside the endpoint method return whatever you like to the client

app.get('/mcgrealife', function(request, response) {
  response.send('dreams of seeing dynamic lists augmented on reality walls 🤓');
});

app.get('/gorilinos', function(request, response) {
  response.send('I will be the Pirate King! ');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
