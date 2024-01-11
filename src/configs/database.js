const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "shoe",
});

// const pool = mysql.createPool({
//   host: "103.200.23.139",
//   user: "middmoon_test1",
//   password: "@M@gj]kiCD9n",
//   database: "middmoon_ShoeStore",
// });

module.exports = pool;
