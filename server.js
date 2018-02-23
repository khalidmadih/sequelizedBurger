// set up express, bodyparser, and methodOverride packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Creating an instance of the express app.
var app = express();

// Adding express middleware for serving static files
app.use(express.static(__dirname + '/public'));

// bodyparsers 
app.use(bodyParser.urlencoded({
  extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Setting Handlebars as the default templating engine.
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// bringing in the controller so routing can be handled
var routes = require("./controllers/burgers_controller");

// creating the routes for /, /update, and /create
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// Declaring the port
var port = process.env.PORT || 3000;

// Initiating the listener
app.listen(port);
