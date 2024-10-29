
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'db_fitness', 
});


db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db; 
