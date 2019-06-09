// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM burgers", function (err, data) {
      if (err) cb(err, null);
      cb(null, data);
    });
  },

  insertOne: function (burgerName, cb) {
    var sqlQuery = "INSERT INTO burgers(burger_name) VALUES(?)";
    console.log(burgerName);
    
    connection.query(sqlQuery, [burgerName], function (err, data) {
      if (err) cb(err, null);
      cb(null, data);
    })
  },

  updateOne: function (burgerId, cb) {
    var sqlQuery = "UPDATE burgers SET devoured=1 WHERE id=" + burgerId;
    console.log(sqlQuery);
    connection.query(sqlQuery, function (err, data) {
      if (err) cb(err, null);
      cb(null, data);
    })
  }
};

module.exports = orm;