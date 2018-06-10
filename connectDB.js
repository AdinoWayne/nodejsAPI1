const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'csdl',
});

con.connect((err) => {
  if (err) throw err;
  console.log('connect successfully');
});

module.exports = con;
