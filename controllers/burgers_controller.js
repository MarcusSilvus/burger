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

  orm.insertOne(burgerName, function(error, burger) {
    if(error) {
      return res.status(401).json({
        message: "Can't eat burger"
      })
    } 
    return res.json({
      burger_name: burgerName,
      id: burger.insertId,
      is_devoured: 0
    })
  });
});

router.put('/devour', (req, res) => {
  var burgerId = req.body.burgerId;
console.log(burgerId);

orm.updateOne(burgerId, function(error, burger) {
  if(error) {
    return res.status(401).json({
      message: "Can't eat burger"
    })
  } 
  return res.json({
    burger
  })
})

})

module.exports = router;
