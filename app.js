// IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// MIDDLEWARE
// set the 'public' folder as the location for our static files:
app.use(express.static('public'));

// specify that we are using 'ejs' templates in our app:
app.set('view engine', 'ejs');

// allow the app to receive data from form submits
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
// Home route using EJS
app.get('/', (req, res) => {
   res.render('default-layout', {
      title: "My Home Page",
      content: "<h1>Hello World from Express!</h1>"
   });
});

// Some route for testing
app.get('/some-route', (req, res) => {
   res.send('<h1>This is some route</h1>');
});

// Dynamic page route
app.get("/dynamic-page.html", (req, res) => {
   const currentTime = new Date();
   res.send(`<h1>The current time is ${currentTime.toString()}</h1>`);
});

// Signup route
app.get('/signup', (req, res) => {
   res.render('signup-layout', {
      title: "Sign Up"
   });
});

// Signup Confirmation
app.post('/signup-confirmation', (req, res) => {
   res.send("Form data received: " + JSON.stringify(req.body));
});

// START THE SERVER
const port = 8080; // We'll run the server on port 8080
const server = app.listen(port, () => {
   console.log("Waiting for requests on port %s", port);
});