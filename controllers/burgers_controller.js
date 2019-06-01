var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
// Import orm
var orm = require("../controllers/burgers_controllers.js")


router.get("/", function(req, res) {
  orm.selectAll(function(error, burgers) {
    if(errors) {
      return res.status(501).json({
        message: 'Unable to query the database'
      });
    }
    res.render("index")
  })
})
// Export routes for server.js to use.
module.exports = router;
