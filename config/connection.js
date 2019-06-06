var mysql = require("mysql");
//require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'squackBox1!',
    database: 'burgers_db'
  });
};

connection.connect(function (err) {
  if (err) throw err;

});

module.exports = connection;

g8mh6ge01lu2z3n1.cbetxkdyhwsb.us - east - 1.rds.amazonaws.com