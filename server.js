var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
