var mysql = require("mysql");
require("dotenv").config();


var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: sqlpass,
  database: 'burgers_db'
});

connection.connect(function (err) {
  if (err) throw err;
  openShop();
});