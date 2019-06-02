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
    var sqlQuery = "INSERT INTO burgers(burger_name) VALUES('${burgerName}')";
    connection.query(sqlQuery, function (err, data) {
      if (err) cb(err, null);
      cb(null, data);
    })
  }
};

module.exports = orm;