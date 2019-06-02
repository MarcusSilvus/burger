var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");
// Import orm
var orm = require("../config/orm")


router.get("/", function(req, res) {
  orm.selectAll(function(errors, burgers) {
    if(errors) {
      return res.status(501).json({
        message: 'Unable to query the database'
      });
    }
    console.log('Burgers: ', burgers);
    res.render('index', { burgers, style: 'burger_style' });
  });
});

router.post('/add', (req, res) => {
  var burgerName = req.body.burger_name;
})

module.exports = router;
